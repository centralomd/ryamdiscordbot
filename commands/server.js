module.exports = {
    name: 'server',
    description: 'Shows the current server\'s name.',
    cooldown: 5,
	execute(message, args) {
		const servername = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle(`${message.guild.name}`)
            .setDescription('This is the name of the server this bot is on.')
        message.channel.send(servername);
    },
};