const Discord = require('discord.js');

module.exports = {
	name: 'queue',
	description: 'Queue command.',
  aliases: ['q', 'qu', 'que', 'queu', 'list', 'l'],
    async execute(message, args, Discord, client, queue, looping, oneLoop) {
		const serverQueue = queue.get(message.guild.id);
    if (!looping.has(message.guild.id)) looping.set(message.guild.id, 'false');

        const noQueue = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`${message.guild.name}: Queue`)
            .addFields(
                { name: `\u200b`, value: `\u200b` },
                { name: `__Now Playing__`, value: `Nothing is playing! Add some music using \`r?play\`!`},
                { name: `__Song queue__`, value: `Empty.`}
            )
            .setFooter('Music System • From centralomd#7083')
        if (!serverQueue) return message.channel.send(noQueue);
        
        const queueEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`${message.guild.name}: Queue`)
            .addFields(
                { name: `\u200b`, value: `\u200b` },
                { name: `__Now Playing__`, value: `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})` },
                { name: `__Song queue__`, value: `${serverQueue.songs.map(song => `• [${song.title}](${song.url}) | \`Requestor: ${song.requestor}\``).join('\n')}` },
            )
            .setFooter(`Music System • ${serverQueue.songs.length} songs, `)

            message.channel.send(queueEmbed);
	}
};