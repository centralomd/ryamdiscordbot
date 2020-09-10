module.exports = {
	name: 'pause',
	description: 'Pause command.',
  aliases: ['ps', 'pa', 'pau', 'paus', 'pp'],
	async execute(message, args, Discord, client, queue) {
		const serverQueue = queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            
            const pausedEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`⏸ ${message.guild.name}: Paused!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Paused__`, value: `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})` },
                { name: `__Requested__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • From centralomd#7083')
			return message.channel.send(pausedEmbed);
		}
		return message.channel.send('There is nothing playing.');
	}
};