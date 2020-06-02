const Discord = require('discord.js');

module.exports = {
	name: 'testhelp',
    description: 'testhelp',
    cooldown: 1,
	execute(message, args) {
        
        const channelid = args.slice(1).join(" ");
        const messageid = args.slice(2).join(" ");

        var channel = guild.channels.get(channelid)

        .message.channel.fetchMessage(messageid)
        .then((message) => {

        message.react("👍")

        })
        
    },
};