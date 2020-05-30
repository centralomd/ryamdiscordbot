const Discord = require('discord.js');
const ytdl = require('ytdl-core');

var servers = {};

module.exports = {
	name: 'stop',
    description: 'Stops the music.',
    cooldown: 3,
	execute(message, args) {
        const stopmusic = new Discord.MessageEmbed()
            .setColor('#FA254C')
            .setTitle('Music Stopped!')
            .setDescription('Current playing music and queue has been cleared and bot is leaving the voice channel!')
        
            connection.disconnect();
            message.channel.send(stopmusic)
            console.log('Ryam Music: Queue has been stopped!')
    },
};