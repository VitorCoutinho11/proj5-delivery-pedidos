const prisma = require("../prisma/client");

class PedidosController {

  // LISTAR TODOS OS PEDIDOS
  static async listar(req, res) {
    try {

      const pedidos = await prisma.pedido.findMany({
        include: {
          itens: true
        }
      });

      return res.status(200).json(pedidos);

    } catch (error) {

      return res.status(500).json({
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
        return res.status(404).json({
          erro: "Pedido não encontrado"
        });
      }

      return res.status(200).json(pedido);

    } catch (error) {

      return res.status(500).json({
        erro: "Erro ao buscar pedido",
        detalhes: error.message
      });

    }
  }

  // CRIAR PEDIDO
  static async criar(req, res) {
    try {

      const {
        pedido_id,
        usuario_id,
        restaurante_id,
        pedido_status,
        pedido_valor_total,
        pedido_criacao_pedido
      } = req.body;

      const novoPedido = await prisma.pedido.create({
        data: {
          pedido_id,
          usuario_id,
          restaurante_id,
          pedido_status,
          pedido_valor_total,
          pedido_criacao_pedido: new Date(pedido_criacao_pedido)
        }
      });

      return res.status(201).json(novoPedido);

    } catch (error) {

      return res.status(500).json({
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
        return res.status(404).json({
          erro: "Pedido não encontrado"
        });
      }

      const pedidoAtualizado = await prisma.pedido.update({
        where: {
          pedido_id: Number(id)
        },
        data: {
          usuario_id,
          restaurante_id,
          pedido_status,
          pedido_valor_total,
          pedido_criacao_pedido: new Date(pedido_criacao_pedido)
        }
      });

      return res.status(200).json(pedidoAtualizado);

    } catch (error) {

      return res.status(500).json({
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
        return res.status(404).json({
          erro: "Pedido não encontrado"
        });
      }

      await prisma.pedido.delete({
        where: {
          pedido_id: Number(id)
        }
      });

      return res.status(200).json({
        mensagem: "Pedido deletado com sucesso"
      });

    } catch (error) {

      return res.status(500).json({
        erro: "Erro ao deletar pedido",
        detalhes: error.message
      });

    }
  }

}

module.exports = PedidosController;