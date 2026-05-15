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
        pedido_criacao_pedido,
        itens // Caso você envie os itens junto no POST
      } = req.body;

      // 1. Persistência no Banco de Dados
      const novoPedido = await prisma.pedido.create({
        data: {
          pedido_id,
          usuario_id,
          restaurante_id,
          pedido_status,
          pedido_valor_total,
          pedido_criacao_pedido: new Date(pedido_criacao_pedido),
          // Se houver itens, cria a relação automaticamente
          itens: itens ? { create: itens } : undefined 
        },
        include: { itens: true }
      });

      // 2. Mensageria (Notificar outros microsserviços)
      const channel = getChannel();
      if (channel) {
        const mensagem = JSON.stringify({
          event: "PEDIDO_CRIADO",
          data: novoPedido,
          timestamp: new Date()
        });

        // Enviamos para a fila 'fila_pedidos'
        channel.sendToQueue('fila_pedidos', Buffer.from(mensagem), {
          persistent: true // Mensagem sobrevive a reinícios do RabbitMQ
        });

        console.log(`[RabbitMQ] Pedido ${novoPedido.pedido_id} enviado para processamento.`);
      }

      return res.status(201).json(novoPedido);

    } catch (error) {
      console.error("Erro ao processar pedido:", error);
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
      const dadosAtualizacao = req.body;

      const pedidoExiste = await prisma.pedido.findUnique({
        where: { pedido_id: Number(id) }
      });

      if (!pedidoExiste) {
        return res.status(404).json({ erro: "Pedido não encontrado" });
      }

      // Ajuste para data caso ela venha na atualização
      if (dadosAtualizacao.pedido_criacao_pedido) {
        dadosAtualizacao.pedido_criacao_pedido = new Date(dadosAtualizacao.pedido_criacao_pedido);
      }

      const pedidoAtualizado = await prisma.pedido.update({
        where: { pedido_id: Number(id) },
        data: dadosAtualizacao,
        include: { itens: true }
      });

      // Opcional: Notificar mudança de status (ex: de 'PENDENTE' para 'PREPARANDO')
      const channel = getChannel();
      if (channel && dadosAtualizacao.pedido_status) {
        channel.sendToQueue('fila_status_pedidos', Buffer.from(JSON.stringify(pedidoAtualizado)));
      }

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
        where: { pedido_id: Number(id) }
      });

      if (!pedidoExiste) {
        return res.status(404).json({ erro: "Pedido não encontrado" });
      }

      await prisma.pedido.delete({
        where: { pedido_id: Number(id) }
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