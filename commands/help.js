const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all the available commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 10,
	execute(message, args) {
		const helpembed = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Command List')
			.setDescription('Currently available commands:')
			.addFields(
				{ name: '‎', value: '‎'},
				{ name: '**r!ping**', value: 'Test command.' },
				{ name: '**r!hello**', value: 'Just a simple hello.' },
				{ name: '**r!help**', value: 'Shows a list of all the commands.' },
				{ name: '**r!yeet**', value: 'Yeet peoples you mention, just for fun.' },
				{ name: '**r!server**', value: 'Shows the name of the server this bot is on.' },
				{ name: '**r!clear**', value: 'Delete/clear messages mentioned.' },
				{ name: '**r!avatar**', value: 'Shows the avatar of that person.' },
				{ name: '**r!gn**', value: 'Says goodnight to the mentioned user. Respect them.'},
				{ name: '**r!invite**', value: 'Get the invite link for this bot.'},
				{ name: '**r!pump**', value: 'Shoot a pump to mentioned user and see how many you damaged them.'},
				{ name: '‎', value: '‎'},
				{ name: '**Coming Soon!**', value: 'Music Commands'},
			)
			.setFooter('Ryam v1b • Help Menu')
		message.channel.send(helpembed)
	},
};