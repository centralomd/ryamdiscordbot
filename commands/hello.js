module.exports = {
    name: 'hello',
    description: 'Just a simple hello.',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Hi! How are you?');
    },
};