const Discord = require('discord.js');

module.exports = {
    name: 'gn',
    description: 'Says goodnight to the mentioned user. Respect them.',
    cooldown: 3,
	execute(message, args) {
        const gnerror = new Discord.MessageEmbed()
                .setColor('#E81515')
                .setTitle('No-one to say goodbye to.')
                .setDescription('You want to say it to yourself? Mention someone who\'s going to bed!')
        if (!message.mentions.users.size) {
            return message.channel.send(gnerror);
        }
        const taggedUser = message.mentions.users.first();
        const goodnight = new Discord.MessageEmbed()
            .setColor('#7C9EFF')
            .setTitle(`Goodnight, ${taggedUser.username}.`)
            .setDescription(`${message.author} wish you a good sleep, and also shut down your phone.`)
        message.channel.send(goodnight)
    },
};