# ─── Estágio de build ────────────────────────────────────────────────────────
FROM node:22-slim AS builder

# Instala o OpenSSL necessário para o Prisma gerar os artefatos corretamente
RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Instala dependências (apenas arquivos de manifest primeiro para cache)
COPY package*.json ./
RUN npm ci --omit=dev

# Copia o restante do código
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# ─── Imagem final (menor) ─────────────────────────────────────────────────────
FROM node:22-slim

# IMPORTANTE: A imagem final também precisa do OpenSSL para rodar as queries no banco
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copia artefatos do estágio de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json

# Porta exposta
EXPOSE 9523

# Health check usando o próprio Node para bater na porta CORRETA (9523)
# Isso elimina a dependência do wget/curl e evita falsos negativos na pipeline
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "const http = require('http'); const req = http.request('http://localhost:9523/health', { timeout: 2000 }, (res) => process.exit(res.statusCode === 200 ? 0 : 1)); req.on('error', () => process.exit(1)); req.end();"

CMD ["node", "src/server.js"]