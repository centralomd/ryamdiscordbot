module.exports = {
	name: 'np',
	description: 'Now playing command.',
  aliases: ['nowplaying', 'nopl'],
	async execute(message, args, Discord, client, queue) {
		const serverQueue = queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        
        const npEmbed = new Discord.MessageEmbed()
        .setColor('#FF98FD')
        .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
        .setTitle(`${message.guild.name}: Now Playing`)
        .addFields(
            //{ name: `\u200b`, value: `\u200b` },
            { name: `__Now Playing__`, value: `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})` },
            { name: `__Requested__`, value: `${serverQueue.songs[0].requestor}` }
        )
        .setFooter('Music System • From centralomd#7083')
        return message.channel.send(npEmbed);
	}
};