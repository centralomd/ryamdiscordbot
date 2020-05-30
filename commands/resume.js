const Discord = require('discord.js');

module.exports = {
	name: 'resume',
    description: 'Resumes the music.',
    cooldown: 3,
	execute(message, args) {
        dispatcher.resume();
        const resume = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('Resumed!')
            .setDescription('Currently paused music has been resumed!')
        message.channel.send(resume)
    },
};