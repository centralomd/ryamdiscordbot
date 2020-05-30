const Discord = require('discord.js');

module.exports = {
	name: 'pause',
    description: 'Pause the music.',
    cooldown: 3,
	execute(message, args) {
        dispatcher.pause();
        const paused = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('Paused!')
            .setDescription('Currently playing music has been paused.')
        message.channel.send(paused)
    },
};