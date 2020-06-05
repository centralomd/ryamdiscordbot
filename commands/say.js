const Discord = require('discord.js');

module.exports = {
	name: 'say',
    description: 'Repeats a word the message author said.',
    cooldown: 5,
	execute(message, args) {
        m => m.delete(1)
        const usermsg = message.content
        message.channel.send(usermsg)
    },
};