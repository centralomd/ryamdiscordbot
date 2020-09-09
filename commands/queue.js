const Discord = require('discord.js');

module.exports = {
	name: 'queue',
	description: 'Queue command.',
    async execute(message, args, Discord, client, queue) {
		const serverQueue = queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send('There is nothing playing.');
        
        const queueEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.username}`, message.author.avatarURL())
            .setTitle(`${message.guild.name}: Queue`)
            .addFields(
                { name: `\u200b`, value: `\u200b` },
                { name: `__Now Playing__`, value: `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})` },
                { name: `__Song queue__`, value: `${serverQueue.songs.map(song => `• [${song.title}](${song.url})`).join('\n')}` },
            )
            .setFooter('Music System • From centralomd#7083')

            message.channel.send(queueEmbed);
	}
};