const Discord = require('discord.js');
const ytdl = require('ytdl-core');

var servers = {};

module.exports = {
	name: 'play',
    description: 'Plays a music.',
    cooldown: 3,
	execute(message, args) {
        function play(connection, message){
            var server = servers[message.guild.id]

            server.dispatcher = connection.play(ytdl(server.queue[0], {filter: 'audioonly'}));

            server.queue.shift();

            server.dispatcher.on('end', function(){
                if(server.queue[0]){
                    play(connection, message);
                }else {
                    connection.disconnect();
                }
            });

        }

    const nolink = new Discord.MessageEmbed()
        .setColor('#F03D3D')
        .setTitle('Music Undefined.')
        .setDescription('Please input the link of the music you wanted to play.')
        if (!args[0]){
            message.channel.send(nolink)
            return;
        }
    const notinvoicechannel = new Discord.MessageEmbed()
        .setColor('#F03D3D')
        .setTitle('Channel Required.')
        .setDescription('You are not in a voice channel!')
        if (!message.member.voice.Channel){
            message.channel.send(notinvoicechannel);
        }
    
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        }

        var server = servers[message.guild.id];

        server.queue.push(args[0]);

        if(!message.member.voiceConnection) message.member.voice.channel.join()
        .then(function(connection){
            play(connection, message)
        })
    },
};