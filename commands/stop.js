module.exports = {
	name: 'stop',
	description: 'Stop command.',
  aliases: ['st', 'sto', 'ss', 'f', 'finish', 'leave'],
	async execute(message, args, Discord, client, queue) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');

		const serverQueue = queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');

		serverQueue.connection.dispatcher.end('Stop command has been used!');

    const stopEmbed = new Discord.MessageEmbed()
      .setColor('#FF98FD')
      .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
      .setTitle(`⏹ ${message.guild.name}: Stopped`)
      .addFields(
        //{ name: `\u200b`, value: `\u200b` },
        { name: `__Queue__`, value: `✅ Cleared, Left VC!` },
        { name: `__Requestor__`, value: `${message.author.tag}` }
      )
      .setFooter('Music System • From centralomd#7083')
      
      serverQueue.voiceChannel.leave();
      message.channel.send(stopEmbed);
      if (queue) return queue.delete(message.guild.id);
	}
};