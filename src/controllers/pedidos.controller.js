const prisma = require("../config/prisma");
const { getChannel } = require("../config/rabbitmq");

class PedidosController {

  // LISTAR TODOS OS PEDIDOS
  static async listar(req, res) {
    try {
      const pedidos = await prisma.pedido.findMany({
        include: {
          itens: true
        }
      });

      return res.send(200, pedidos);

    } catch (error) {
      return res.send(500, {
        erro: "Erro ao listar pedidos",
        detalhes: error.message
      });
    }
  }

  // BUSCAR PEDIDO POR ID
  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;

      const pedido = await prisma.pedido.findUnique({
        where: {
          pedido_id: Number(id)
        },
        include: {
          itens: true
        }
      });

      if (!pedido) {
        return res.send(404, {
          erro: "Pedido não encontrado"
        });
      }

      return res.send(200, pedido);

    } catch (error) {
      return res.send(500, {
        erro: "Erro ao buscar pedido",
        detalhes: error.message
      });
    }
  }

  // CRIAR PEDIDO (Atualizado com Autoincremento e criação de itens aninhada)
  static async criar(req, res) {
    try {
      const {
        usuario_id,
        restaurante_id,
        pedido_status,
        pedido_valor_total,
        pedido_criacao_pedido,
        itens
      } = req.body;

      const novoPedido = await prisma.pedido.create({
        data: {
          // pedido_id REMOVIDO: O MySQL assume o autoincremento nativo do banco
          usuario_id: Number(usuario_id),
          restaurante_id: Number(restaurante_id),
          pedido_status: Number(pedido_status),
          pedido_valor_total: Number(pedido_valor_total),
          pedido_criacao_pedido: new Date(pedido_criacao_pedido),
          
          // Criação dos itens atrelados automaticamente ao novo pedido
          itens: itens && itens.length > 0 ? {
            create: itens.map((item, index) => {
              // Gerador de ID curto para a tabela de item_pedido
              const agora = new Date();
              const tempoCurto = `${agora.getMinutes()}${agora.getSeconds()}`;
              const idDoItem = Math.floor(Number(`${tempoCurto}${index}${Math.floor(Math.random() * 9) + 1}`));

              return {
                item_pedido_id: idDoItem,
                item_pedido_quantidade: Number(item.item_pedido_quantidade),
                item_pedido_preco: Number(item.item_pedido_preco),
                prato_id: Number(item.prato_id)
              };
            })
          } : undefined
        },
        include: {
          itens: true
        }
      });

      return res.send(201, novoPedido);

    } catch (error) {
      return res.send(500, {
        erro: "Erro ao criar pedido",
        detalhes: error.message
      });
    }
  }

  // ATUALIZAR PEDIDO
  static async atualizar(req, res) {
    try {
      const { id } = req.params;

      const {
        usuario_id,
        restaurante_id,
        pedido_status,
        pedido_valor_total,
        pedido_criacao_pedido
      } = req.body;

      const pedidoExiste = await prisma.pedido.findUnique({
        where: {
          pedido_id: Number(id)
        }
      });

      if (!pedidoExiste) {
        return res.send(404, {
          erro: "Pedido não encontrado"
        });
      }

      const pedidoAtualizado = await prisma.pedido.update({
        where: {
          pedido_id: Number(id)
        },
        data: {
          usuario_id: Number(usuario_id),
          restaurante_id: Number(restaurante_id),
          pedido_status: Number(pedido_status),
          pedido_valor_total: Number(pedido_valor_total),
          pedido_criacao_pedido: new Date(pedido_criacao_pedido)
        }
      });

      return res.send(200, pedidoAtualizado);

    } catch (error) {
      return res.send(500, {
        erro: "Erro ao atualizar pedido",
        detalhes: error.message
      });
    }
  }

  // DELETAR PEDIDO
  static async deletar(req, res) {
    try {
      const { id } = req.params;

      const pedidoExiste = await prisma.pedido.findUnique({
        where: {
          pedido_id: Number(id)
        }
      });

      if (!pedidoExiste) {
        return res.send(404, {
          erro: "Pedido não encontrado"
        });
      }

      await prisma.pedido.delete({
        where: {
          pedido_id: Number(id)
        }
      });

      return res.send(200, {
        mensagem: "Pedido deletado com sucesso"
      });

    } catch (error) {
      return res.send(500, {
        erro: "Erro ao deletar pedido",
        detalhes: error.message
      });
    }
  }

}

module.exports = PedidosController;