const Discord = require('discord.js');

module.exports = {
	name: 'timestamp',
    description: 'timestamp test',
    cooldown: 5,
	execute(message, args) {
        const timestamptest = new Discord.MessageEmbed()
            .setTitle('Test')
            .setTimestamp('1000')
        message.channel.send(timestamptest)
    },
};