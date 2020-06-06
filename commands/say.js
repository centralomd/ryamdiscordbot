const Discord = require('discord.js');

module.exports = {
	name: 'say',
    description: 'Repeats a word the message author said.',
    cooldown: 5,
	execute(message, args) {
        const numberonedelete = 1

        message.author.delete(1)
        if(message.author.bot) return message.channel.bulkDelete(numberonedelete);
        let saymsg = message.content
                message.channel.send(saymsg.replace("r!say",""))
    },
};