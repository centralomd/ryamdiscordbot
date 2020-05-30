const Discord = require('discord.js');
var servers = {};

module.exports = {
	name: 'skip',
    description: 'Skips the music.',
    cooldown: 3,
	execute(message, args) {
        const skipmusic = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('Music Skip')
            .setDescription('Successfully skipped currently playing music!')
        var server = servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
        message.chanel.send(skipmusic)
        
    },
};