const Discord = require('discord.js');

module.exports = {
	name: 'say',
    description: 'Repeats a word the message author said.',
    cooldown: 5,
	execute(message, args) {
        message.delete()
        if(message.author.bot) return message.channel.send('You\'re a bot, lmao.');
        const saymsg = message.content
                message.channel.send(saymsg.replace("r!say",""))
    },
};