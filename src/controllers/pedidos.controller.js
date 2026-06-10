const prisma = require("../config/prisma");
const { enviarParaFila } = require("../config/rabbitmq");

// LISTAR TODOS OS PEDIDOS
async function listar(req, res) {
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
async function buscarPorId(req, res) {
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

// CRIAR PEDIDO
async function criar(req, res) {
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
        usuario_id: Number(usuario_id),
        restaurante_id: Number(restaurante_id),
        pedido_status: Number(pedido_status),
        pedido_valor_total: Number(pedido_valor_total),
        pedido_criacao_pedido: new Date(pedido_criacao_pedido),

        itens: itens && itens.length > 0 ? {
          create: itens.map((item) => ({
            item_pedido_quantidade: Number(item.item_pedido_quantidade),
            item_pedido_preco: Number(item.item_pedido_preco),
            prato_id: Number(item.prato_id)
          }))
        } : undefined
      },
      include: {
        itens: true
      }
    });

    enviarParaFila('delivery_pedidos', novoPedido);

    return res.send(201, novoPedido);
  } catch (error) {
    return res.send(500, {
      erro: "Erro ao criar pedido",
      detalhes: error.message
    });
  }
}

// ATUALIZAR PEDIDO
async function atualizar(req, res) {
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
async function deletar(req, res) {
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

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar
};