const Discord = require('discord.js');

module.exports = {
	name: 'testhelp',
    description: 'testhelp',
    cooldown: 1,
	execute(message, args) {
        const testhelpembed = new Discord.MessageEmbed()
            .setTitle('Test')
            .setDescription('Test')

        message.channel.send(testhelpembed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
    },
};