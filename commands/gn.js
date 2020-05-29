const Discord = require('discord.js');

module.exports = {
    name: 'gn',
    description: 'Says goodnight to the mentioned user. Respect them.',
    cooldown: 3,
	execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const goodnight = new Discord.MessageEmbed()
            .setColor('#7C9EFF')
            .setTitle(`Goodnight, ${taggedUser.username}.`)
            .setDescription(`${message.author} wish you a good sleep, and also shut down your phone.`)
        message.channel.send(goodnight)
    },
};