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
        const joinserverad = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('Join our Discord Server!')
            .setDescription('Press (or click) the title to join server. pls join :pleading_face:')
        message.channel.send(inviteembed)
         message.channel.send(joinserverad);
    },
};