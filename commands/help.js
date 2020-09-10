const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all the available commands.',
	aliases: ['commands', 'h'],
	execute(message, args, client) {
	// HELP EMBED START
		const helpembed = new Discord.MessageEmbed()
			.setColor('#FF98FD')
			.setTitle('Commandlist: Music')
			.addFields(
				{ name: '\u200b', value: '\u200b'},
				{ name: '**r?play**', value: 'Play music, or resume if queue is paused.' },
				{ name: '**r?pause**', value: 'Pause current playing queue.' },
				{ name: '**r?stop**', value: 'Clears the queue and (bot) leaves the voice channel.' },
				{ name: '**r?queue**', value: 'Displayes the current queue.' },
				{ name: '**r?np**', value: 'Displayes the current playing music' }, 
        { name: '**r?skip**', value: 'Skips to the next music on the queue.' },       
			)
			.setFooter('Music System • From centralomd#7083')
	
    message.channel.send(helpembed);
//endbrackets
	},
};
