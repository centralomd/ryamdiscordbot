const fs = require('fs');
const ytdl = require('ytdl-core');
const { Util } = require('discord.js');
const YouTube = require("discord-youtube-api");
 
const youtube = new YouTube("AIzaSyBdiNbhFfsILnFlRiYpGJ9uOGZCmzB4F88");

module.exports = {
	name: 'play',
	description: 'Play the music.',
	async execute(message, args, Discord, client, queue) {
    const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		if (!permissions.has('SPEAK')) return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');


    const serverQueue = queue.get(message.guild.id);
    const video = await youtube.searchVideos(`${args.join(' ')}`);
    const vidURL = video.url;
    const songInfo = await ytdl.getInfo(vidURL.replace(/<(.+)>/g, '$1'));
		const song = {
			id: songInfo.videoDetails.video_id,
      title: Util.escapeMarkdown(songInfo.videoDetails.title),
      url: songInfo.videoDetails.video_url,
      requestor: message.author.username
		};

		if (serverQueue) {
			serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      
      const addQueueEmbed = new Discord.MessageEmbed()
      .setColor('#1CE300')
      .setAuthor(`Queue • ${message.author.username}`, message.author.avatarURL())
      .setTitle(`✅ ${message.guild.name}: Added to Queue!`)
      .addFields(
          //{ name: `\u200b`, value: `\u200b` },
          { name: `__Requested Music__`, value: `[${song.title}](${song.url})` },
          { name: `__Requestor__`, value: `${song.requestor}` }
      )
      .setFooter('Music System • From centralomd#7083')
			return message.channel.send(addQueueEmbed);
		}

		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: channel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
      const curqueue = queue.get(message.guild.id);
      var stopTimer;
			if (!song) {
        function leaveChannel() {
          stopTimer = setTimeout(() => {
            curqueue.voiceChannel.leave();
            curqueue.songs = [];
            serverQueue.connection.dispatcher.end('No music is left.');
            return;
          }, 300000);
        }
        
        leaveChannel();
			}

			const dispatcher = curqueue.connection.play(ytdl(song.url))
				.on('finish', () => {
					curqueue.songs.shift();
					play(curqueue.songs[0]);
				})
				.on('error', error => console.error(error));
      dispatcher.setVolumeLogarithmic(curqueue.volume / 5);
      
      const addSongEmbed = new Discord.MessageEmbed()
      .setColor('#1CE300')
      .setAuthor(`Queue • ${message.author.username}`, message.author.avatarURL())
      .setTitle(`🎶 ${message.guild.name}: Playing!`)
      .addFields(
          //{ name: `\u200b`, value: `\u200b` },
          { name: `__Playing__`, value: `[${song.title}](${song.url})` },
          { name: `__Requested__`, value: `${song.requestor}` }
      )
      .setFooter('Music System • From centralomd#7083')

      curqueue.textChannel.send(addSongEmbed);
      
      function stopCancel() {
        clearTimeout(stopTimer);
      }

      stopCancel();
		};

		try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
      if (error.message === 'WebSocket was closed before the connection was established'){
        message.channel.send('Current guild\'s server has been changed.')
      }
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	},
};