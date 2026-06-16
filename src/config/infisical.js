/**
 * src/config/infisical.js
 * SDK @infisical/sdk v5 — autenticação via accessToken (Service Token)
 */
 
const { InfisicalSDK } = require('@infisical/sdk');
 
const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.e3c2abe5-bb9c-44a4-9c89-6722a2770f50.229518f172a83cab52d8a932b6cbe58e.7520a20b9e4d08baf1c15cdbfa8749cd';
const INFISICAL_PROJECT_ID = process.env.INFISICAL_PROJECT_ID || 'a4e361bc-4ac8-4d10-9e09-3746b864e0fa';
const INFISICAL_ENV        = process.env.INFISICAL_ENV        || 'prod';
 
async function loadSecrets() {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Infisical] NODE_ENV !== production — usando variáveis locais (.env)');
    return;
  }
 
  try {
    console.log(`[Infisical] Conectando... projeto: ${INFISICAL_PROJECT_ID} | ambiente: ${INFISICAL_ENV}`);
 
    const client = new InfisicalSDK({ siteUrl: 'https://app.infisical.com' });
 
    // SDK v5: Service Token usa accessToken() diretamente
    await client.auth().accessToken(INFISICAL_TOKEN);
 
    const { secrets } = await client.secrets().listSecrets({
      projectId:   INFISICAL_PROJECT_ID,
      environment: INFISICAL_ENV,
      secretPath:  '/',
    });
 
    let count = 0;
    for (const secret of secrets) {
      if (!process.env[secret.secretKey]) {
        process.env[secret.secretKey] = secret.secretValue;
        count++;
      }
    }
 
    console.log(`[Infisical] ✅ ${count} secret(s) carregado(s).`);
  } catch (err) {
    console.error('[Infisical] ❌ Erro ao carregar secrets:', err.message);
    process.exit(1);
  }
}
 
module.exports = { loadSecrets };