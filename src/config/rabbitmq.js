const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
    try {
        
        const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
        channel = await connection.createChannel();
        
        // Garante que a fila de pedidos exista
        await channel.assertQueue('fila_pedidos', { durable: true });
        
        console.log("RabbitMQ: Conectado e Canal Criado");
    } catch (error) {
        console.error("Erro no RabbitMQ:", error);
        setTimeout(connectRabbitMQ, 5000); // Retry
    }
}

const getChannel = () => channel;

module.exports = { connectRabbitMQ, getChannel };