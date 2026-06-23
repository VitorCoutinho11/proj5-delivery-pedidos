const { PrismaClient } = require('../../prisma/generated/client');

let prisma;

module.exports = new Proxy({}, {
  get(_, prop) {
    if (!prisma) {
      prisma = new PrismaClient();
      console.log("Prisma: Client inicializado com sucesso." + process.env.DATABASE_URL);
    }
    return prisma[prop];
  }
});