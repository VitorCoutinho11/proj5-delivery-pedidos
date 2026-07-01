require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const restify = require("restify");
const PedidosController = require("./controllers/pedidos.controller");
const { connectRabbitMQ } = require("./config/rabbitmq");
const { loadSecrets } = require("./config/infisical");

const server = restify.createServer({
  name: "api-pedidos-restify"
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


server.pre((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.send(200);
    return;
  }
  return next();
});

/* Rota de Healthcheck para o Docker / Jenkins */
server.get("/health", (req, res, next) => {
  res.send(200, {
    status: "UP",
    timestamp: new Date(),
    uptime: process.uptime()
  });
  return next();
});

/* Mapeamento de Rotas com Validação Segura */
if (PedidosController) {
  if (typeof PedidosController.listar === "function") {
    server.get("/pedidos", PedidosController.listar);
  }
  if (typeof PedidosController.buscarPorId === "function") {
    server.get("/pedidos/:id", PedidosController.buscarPorId);
  }
  if (typeof PedidosController.criar === "function") {
    server.post("/pedidos", PedidosController.criar);
  }
  if (typeof PedidosController.atualizar === "function") {
    server.patch("/pedidos/:id", PedidosController.atualizar);
  } else {
    console.warn("Aviso: O método 'atualizar' não foi encontrado no PedidosController.");
  }
  if (typeof PedidosController.deletar === "function") {
    server.del("/pedidos/:id", PedidosController.deletar);
  }
  if (typeof PedidosController.buscarPorRestauranteIdId === "function") {
    server.get("/pedidos/:id", PedidosController.buscarPorRestauranteIdId);
  }
  if (typeof PedidosController.buscarPorUsuarioIdId === "function") {
    server.get("/pedidos/:id", PedidosController.buscarPorUsuarioIdId);
  }
} else {
  console.error("Erro Crítico: PedidosController não foi importado corretamente.");
}

const PORT = 9523;

async function start() {
  try {
    // Carrega variáveis do Infisical primeiro
    await loadSecrets();
    // Conecta ao RabbitMQ antes de abrir a porta do servidor
    await connectRabbitMQ();
    server.listen(PORT, () => {
      console.log(`${server.name} rodando em ${server.url}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor:", error);
    process.exit(1); // Fecha a aplicação caso a conexão essencial falhe
  }
}

start();