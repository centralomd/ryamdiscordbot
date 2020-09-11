
module.exports = {
	name: 'volume',
	description: 'Volume command.',
	async execute(message, args, Discord, client, queue) {
		const { channel } = message.member.voice;
    const noChannel = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`❌ ${message.guild.name}: Error`)
      .addFields(
        //{ name: `\u200b`, value: `\u200b` },
        { name: `__Error Info__`, value: `Attemptor is not on any voice channels.` },
        { name: `__Attemptor__`, value: `${message.author.tag}` }
      )
      .setFooter('Music System • From centralomd#7083')

		if (!channel) return message.channel.send(noChannel);

		const serverQueue = queue.get(message.guild.id);

    const noMusic = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`❌ ${message.guild.name}: Error`)
      .addFields(
        //{ name: `\u200b`, value: `\u200b` },
        { name: `__Error Info__`, value: `Nothing is playing.` },
        { name: `__Attemptor__`, value: `${message.author.tag}` }
      )
      .setFooter('Music System • From centralomd#7083')
		if (!serverQueue) return message.channel.send(noMusic);

    const volumeEmbed = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`🔊 ${message.guild.name}: Volume`)
      .addFields(
        //{ name: `\u200b`, value: `\u200b` },
        { name: `__Current Volume__`, value: `${serverQueue.volume}` },
        { name: `__Requestor__`, value: `${message.author.tag}` }
      )
      .setFooter('Music System • From centralomd#7083')

		if (!args[0]) return message.channel.send(volumeEmbed);
    
		serverQueue.volume = args[0]; // eslint-disable-line
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);

    const volSet = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`🔊✔ ${message.guild.name}: Volume Set!`)
      .addFields(
        //{ name: `\u200b`, value: `\u200b` },
        { name: `__New Volume__`, value: `${args[0]}` },
        { name: `__Requestor__`, value: `${message.author.tag}` }
      )
      .setFooter('Music System • From centralomd#7083')
		return message.channel.send(volSet);
	}
};