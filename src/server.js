const restify = require("restify");

const PedidosController = require("./controllers/pedidos.controller");

console.log("Controller Pedidos carregado:", PedidosController);

const server = restify.createServer({
  name: "api-pedidos-restify"
});

// plugins
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/* =========================
   ROTAS DE PEDIDOS
========================= */

if (PedidosController && PedidosController.listar) {

  // LISTAR TODOS
  server.get("/pedidos", PedidosController.listar);

  // BUSCAR POR ID
  server.get("/pedidos/:id", PedidosController.buscarPorId);

  // CRIAR
  server.post("/pedidos", PedidosController.criar);

  // ATUALIZAR
  server.patch("/pedidos/:id", PedidosController.atualizar);

  // DELETAR
  server.del("/pedidos/:id", PedidosController.deletar);

} else {

  console.error(
    "ERRO CRÍTICO: As funções do PedidosController não foram encontradas!"
  );

  process.exit(1);
}

// tratamento global de erro
server.on("restifyError", (req, res, err, callback) => {
  console.error(err);
  return callback();
});

const PORT = 3003;

server.listen(PORT, () => {
  console.log(`${server.name} rodando em ${server.url}`);
});