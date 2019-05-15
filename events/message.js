module.exports = (client, message) => {
    if (message.content.startsWith('!ping')) {
        return message.channel.send('Pong!')
    }
}