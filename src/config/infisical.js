/**
 * src/config/infisical.js
 * SDK @infisical/sdk v5 — autenticação via accessToken (Service Token) ou Universal Auth
 */
 
const { InfisicalSDK } = require('@infisical/sdk');
 
const INFISICAL_TOKEN      = process.env.INFISICAL_TOKEN      || 'st.aa29cc92-8283-455d-9180-5e0542f39920.085f11c904dd355418cd9f5b420b2417.e07eb501e4383ae653b0c51558084977';
const INFISICAL_PROJECT_ID = process.env.INFISICAL_PROJECT_ID || 'a4e361bc-4ac8-4d10-9e09-3746b864e0fa';
const INFISICAL_ENV        = process.env.INFISICAL_ENV        || 'prod';
const INFISICAL_SECRET_PATH = process.env.INFISICAL_SECRET_PATH || '/pasta';

const INFISICAL_CLIENT_ID   = process.env.INFISICAL_CLIENT_ID   || process.env.CLIENT_ID;
const INFISICAL_CLIENT_SECRET = process.env.INFISICAL_CLIENT_SECRET || process.env.CLIENT_SECRET;

async function loadSecrets() {
  try {
    console.log(`[Infisical] Conectando... projeto: ${INFISICAL_PROJECT_ID} | ambiente: ${INFISICAL_ENV} | path: ${INFISICAL_SECRET_PATH}`);
 
    const client = new InfisicalSDK({ siteUrl: 'https://app.infisical.com' });
 
    if (INFISICAL_CLIENT_ID && INFISICAL_CLIENT_SECRET) {
      console.log('[Infisical] Autenticando com Universal Auth (Machine Identity)...');
      await client.auth().universalAuth.login({
        clientId: INFISICAL_CLIENT_ID,
        clientSecret: INFISICAL_CLIENT_SECRET
      });
    } else {
      console.log('[Infisical] Autenticando com Service Token...');
      await client.auth().accessToken(INFISICAL_TOKEN);
    }
 
    const { secrets } = await client.secrets().listSecrets({
      projectId:   INFISICAL_PROJECT_ID,
      environment: INFISICAL_ENV,
      secretPath:  INFISICAL_SECRET_PATH,
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
  }
}
 
module.exports = { loadSecrets };