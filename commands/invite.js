const Discord = require('discord.js');

module.exports = {
name: 'invite',
    description: 'Get the invite link for this bot.',
    cooldown: 5,
	execute(message, args) {
        const inviteembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('Left click or Hold this text to get the link.')
            .setURL('https://discordapp.com/oauth2/authorize?client_id=713715944995946499&scope=bot&permissions=2146958847')
        message.channel.send(inviteembed)
    },
};