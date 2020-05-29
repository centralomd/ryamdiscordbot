const Discord = require('discord.js');

module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
	execute(message, args) {
        const pingembed = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PONG!')
            .setDescription('Test successfull! Bot is working perfectly! :ok_hand:')
        message.channel.send(pingembed)
    },
};