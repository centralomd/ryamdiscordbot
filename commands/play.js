const fs = require('fs');
const ytdl = require('ytdl-core');
const { Util } = require('discord.js');
const YouTube = require("discord-youtube-api");
const scrapeYt = require("scrape-yt");
const arrayMove = require('array-move');
 
const youtube = new YouTube("AIzaSyBdiNbhFfsILnFlRiYpGJ9uOGZCmzB4F88");

module.exports = {
	name: 'play',
	description: 'Play the music.',
  aliases: ['p', 'pl', 'pla', 'listen'],
	async execute(message, args, Discord, client, queue, looping, oneLoop) {
    const { channel } = message.member.voice;
		if (!channel) return message.channel.send('❌ **Error**: You need to be **in a voicechat** for me to be able to play music!');
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		if (!permissions.has('SPEAK')) return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');

    if (!args.length) {
      const serverQueue = queue.get(message.guild.id);
		  if (serverQueue && !serverQueue.playing) {
			  serverQueue.playing = true;
			  serverQueue.connection.dispatcher.resume();

          const pausedEmbed = new Discord.MessageEmbed()
            .setColor('#58FC91')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`▶ ${message.guild.name}: Resumed!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Resumed__`, value: `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})` },
                { name: `__Requestor__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • From centralomd#7083')
			return message.channel.send(pausedEmbed);
		}
		return message.channel.send('Please mention a music to play!');
    }

    (async() => {
    const serverQueue = queue.get(message.guild.id);
    const video = await youtube.searchVideos(`${args.join(' ')}`);
    let video2 = await scrapeYt.search(`${args.join(' ')}`);
    
    const vidURL = video.url;
    const songInfo = await ytdl.getInfo(vidURL.replace(/<(.+)>/g, '$1'));
		const song = {
			id: songInfo.videoDetails.videoId,
      title: Util.escapeMarkdown(songInfo.videoDetails.title),
      url: songInfo.videoDetails.video_url,
      duration: video2.duration,
      thumbnail: video2.thumbnail,
      requestor: message.author.tag
		};

		if (serverQueue) {
			serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      
      const addQueueEmbed = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
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
      if (!looping.has(message.guild.id)) looping.set(message.guild.id, 'false');
      if (!oneLoop.has(message.guild.id)) oneLoop.set(message.guild.id, 'false');

      const loopCheck = looping.get(message.guild.id);
      const oneCheck = oneLoop.get(message.guild.id)

      const curqueue = queue.get(message.guild.id);
      
      var stopTimer;
			if (!song) {
        if (queue) queue.delete(message.guild.id);
        function leaveChannel() {
          stopTimer = setTimeout(() => {
            curqueue.voiceChannel.leave();
          }, 300000);
        }
        leaveChannel();
			}

      const dispatcher = await curqueue.connection.play(ytdl(song.url))
				.on('finish', async () => {  
          curqueue.textChannel.setTopic(`⏹ Put Music Bot commands here! No off-topic communication is allowed.`)          
            if (loopCheck === 'true') {
              const firstSong = curqueue.songs.shift()
              curqueue.songs[curqueue.songs.length] = firstSong;
              play(curqueue.songs[0]);
            } else if (oneCheck === 'true') {
              play(curqueue.songs[0]);
            } else {
              curqueue.songs.shift();
              play(curqueue.songs[0]);
            }
          })
				.on('error', error => {
          console.error(error)
          if (error.name === 'UnhandledPromiseRejectionWarning') {
            console.log(`URL Error: ${error}`);
          } else if (error.name === 'TypeError') {
            console.log(`URL Error: ${error}`);
          } else {
            console.log('Error at Playing Music!')
          }
        })
      if (!dispatcher) return;
      dispatcher.setVolumeLogarithmic(curqueue.volume / 5);

      //musicPlayer();

      const addSongEmbed = new Discord.MessageEmbed()
      .setColor('#1CE300')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`🎶 ${message.guild.name}: Playing!`)
      .addFields(
          //{ name: `\u200b`, value: `\u200b` },
          { name: `__Playing__`, value: `[${song.title}](${song.url})` },
          { name: `__Requested__`, value: `${song.requestor}` }
      )
      .setFooter('Music System • From centralomd#7083')

    curqueue.textChannel.setTopic(`▶ Playing: **${song.title}** on **${curqueue.voiceChannel.name}** | Requestor: ${song.requestor}`, 'New Music has been played!');

    if (loopCheck === 'false' || oneCheck === 'false') {
      curqueue.textChannel.send(addSongEmbed);
    };
      
      function stopCancel() {
        clearTimeout(stopTimer);
      }

      stopCancel();
		}

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
    })();
	},
};