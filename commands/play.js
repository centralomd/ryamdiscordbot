const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client();

var servers = {};

module.exports = {
	name: 'play',
    description: 'Plays a music.',
    cooldown: 3,
	execute(message, args) {
        const musicURL = args.slice(1).join(" ");

        client.on('message', async message => {
            // Join the same voice channel of the author of the message
            if (message.member.voice.channel) {
                const connection = await message.member.voice.channel.join();
            } 
            const dispatcher = connection.play(musicURL);

            dispatcher.on('start', () => {
                console.log('Music is now playing!');
            });
        
            // Create a ReadableStream of s16le PCM audio
            const audio = connection.receiver.createStream(user, { mode: 'pcm' });
        
            audio.pipe(fs.createWriteStream('user_audio'));
        
            dispatcher.on('finish', () => {
                console.log('Music has been stopped!');
            });
        
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);
        });
    
    },
};