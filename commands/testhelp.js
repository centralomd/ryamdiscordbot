const Discord = require('discord.js');

module.exports = {
	name: 'testhelp',
    description: 'testhelp',
    cooldown: 1,
	execute(message, args) {
        const messageid = args.slice(1).join(" ")

        message.channel.fetch(messageid).then(message => {
            message.react('👍')
        })
    },
};