const Discord = require('discord.js');

module.exports = {
    name: 'yeet',
    description: 'Yeet any person you mention. For fun.',
    cooldown: 7,
    guildOnly: true,
	execute(message, args) {
		const yeeterror = new Discord.MessageEmbed()
                .setColor('#E81515')
                .setTitle('MENTION UNDEFINED')
                .setDescription('You did not mention anyone.')
        if (!message.mentions.users.size) {
            return message.channel.send(yeeterror);
        }
        const taggedUser = message.mentions.users.first();
        const yeetembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('YEET!')
            .setDescription(`${message.author} yeeted **${taggedUser.username}** sky-high.`)
        message.channel.send(yeetembed);
    },
};