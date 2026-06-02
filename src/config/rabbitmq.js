const amqp = require('amqplib');

let channel;
let connection;

async function connectRabbitMQ() {
    try {
        // Se não encontrar a variável no .env, usa o padrão admin:admin para o IP do SENAC
        const rabbitmqUrl = process.env.RABBITMQ_URL || 'amqp://admin:admin@10.136.38.50:5672';
        
        connection = await amqp.connect(rabbitmqUrl);
        channel = await connection.createChannel();
        
        // Garante que a fila de pedidos exista e seja durável
        await channel.assertQueue('delivery_pedidos', { durable: true });
        
        console.log("RabbitMQ: Conectado e Canal Criado");

        // Tratamento para reconexão automática em caso de queda
        connection.on('close', () => {
            console.error("RabbitMQ: Conexão fechada. Tentando reconectar em 5s...");
            return setTimeout(connectRabbitMQ, 5000);
        });

        connection.on('error', (err) => {
            console.error("RabbitMQ: Erro na conexão:", err.message);
        });

    } catch (error) {
        console.error("RabbitMQ: Erro ao conectar:", error.message);
        setTimeout(connectRabbitMQ, 5000);
    }
}

// Função para centralizar o envio de mensagens do microsserviço
const enviarParaFila = (nomeFila, dados) => {
    try {
        if (!channel) {
            console.error(`RabbitMQ: Não foi possível enviar. Canal não inicializado para a fila ${nomeFila}.`);
            return false;
        }

        const mensagem = JSON.stringify({
            event: "PEDIDO_CRIADO",
            data: dados,
            timestamp: new Date()
        });

        // Envia a mensagem como persistente
        channel.sendToQueue(nomeFila, Buffer.from(mensagem), { persistent: true });
        console.log(`RabbitMQ: Evento enviado para a fila [${nomeFila}]`);
        return true;
    } catch (error) {
        console.error("RabbitMQ: Erro ao enviar mensagem:", error.message);
        return false;
    }
};

const getChannel = () => channel;

module.exports = { connectRabbitMQ, getChannel, enviarParaFila };