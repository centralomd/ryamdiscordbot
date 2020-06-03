const Discord = require('discord.js');

module.exports = {
	name: 'testhelp',
    description: 'testhelp',
    cooldown: 1,
	execute(message, args) {
        const channel = message.guild.channels.cache.find('name', 'testhelp');
        let suggestion = args.slice(0).join(" ");
        if (!channel) return;

        const embed = new Discord.MessageEmbed()
            .setTitle('Test')
            .setDescription('Test')

        channel.send(embed).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
    },
};