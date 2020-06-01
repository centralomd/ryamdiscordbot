const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'msgcount',
    description: 'COMMAND IS BEING TESTED!',
    cooldown: 5,
	execute(message, args) {
        client.on('event', async (first, last) => {
        await message.channel.send('Send two messages and I\'ll tell you how far apart you sent them.');
        const messages = await message.channel.awaitMessages(m => m.author.id === message.author.id, {
	        max: 2,
	        time: 30e3,
	        errors: ['time'],
        });

        const difference = messages.last().createdTimestamp - messages.first().createdTimestamp;
        const formatted = ms(difference);

        message.channel.send(`You sent the two messages ${formatted} apart.`);
        });
    },
};