const restify = require("restify");
const PedidosController = require("./controllers/pedidos.controller");
const { connectRabbitMQ } = require("./config/rabbitmq");

const server = restify.createServer({
  name: "api-pedidos-restify"
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

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
} else {
  console.error("Erro Crítico: PedidosController não foi importado corretamente.");
}

const PORT = 9523;

async function start() {
  try {
    // Conecta ao RabbitMQ antes de abrir a porta do servidor
    await connectRabbitMQ();
    console.log("Conectado ao RabbitMQ com sucesso.");

    server.listen(PORT, () => {
      console.log(`${server.name} rodando em ${server.url}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor:", error);
    process.exit(1); // Fecha a aplicação caso a conexão essencial falhe
  }
}

start();