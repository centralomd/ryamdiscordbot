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
        var server = servers[message.guild.id];
        if (message.guild.voiceConnection){
            for(var i = server.queue.length -1; i >=0; i--){
                server.queue.splice(i, 1);
            }

            server.dispatcher.end();
            message.channel.send(stopmusic)
            console.log('Ryam Music: Queue has been stopped!')
        }

        if(message.quild.connection) message.guild.voiceConnection.disconnect();
    },
};