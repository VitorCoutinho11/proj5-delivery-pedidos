const restify = require("restify");
const PedidosController = require("./controllers/pedidos.controller");
const { connectRabbitMQ } = require("./config/rabbitmq"); // Importe aqui

const server = restify.createServer({
  name: "api-pedidos-restify"
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* Rotas permanecem as mesmas... */
if (PedidosController && PedidosController.listar) {
    server.get("/pedidos", PedidosController.listar);
    server.get("/pedidos/:id", PedidosController.buscarPorId);
    server.post("/pedidos", PedidosController.criar);
    server.patch("/pedidos/:id", PedidosController.atualizar);
    server.del("/pedidos/:id", PedidosController.deletar);
}

const PORT = 9524;

async function start() {
  // Conecta ao RabbitMQ antes de abrir a porta do servidor
  await connectRabbitMQ();

  server.listen(PORT, () => {
    console.log(`${server.name} rodando em ${server.url}`);
  });
}

start();