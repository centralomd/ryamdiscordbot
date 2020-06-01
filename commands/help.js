const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');
const bot = new Client();

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
				{ name: '**Basic Commands**', value: '‎'},
				{ name: '**r!help**', value: 'Shows a list of all the commands.' },
				{ name: '**r!invite**', value: 'Get the invite link for this bot.'},
				{ name: '**r!hello (shutting down soon)**', value: 'Just a simple hello.' },
				{ name: '‎', value: '‎'},
				{ name: '**Fun Commands**', value: '‎'},
				{ name: '**r!yeet**', value: 'Yeet peoples you mention, just for fun.' },
				{ name: '**r!gn**', value: 'Says goodnight to the mentioned user. Respect them.'},
				{ name: '**r!pump**', value: 'Shoot a pump to mentioned user and see how many you damaged them.'},
				{ name: '**r!snipe**', value: 'Snipe those scared kids and see how much you damaged them.'},
				{ name: '**r!fullsweat**', value: 'Full sweat on a mentioned user and see what you did.'},
				{ name: '‎', value: '‎'},
				{ name: '**Admin Commands**', value: '‎'},
				{ name: '**PERMISSION UNVERIFIED!**', value: 'You are only able to view this part if you have "ADMINISTRATOR" permission.' },
				{ name: '‎', value: '‎'},
				{ name: '**Coming Soon!**', value: 'Apparently we are unable to create a music bot. We will add other features like the fun commands. Stay tuned.'},
			)
			.setFooter('Ryam v1b • Help Menu')
		const adminhelpembed = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Command List: Admin')
			.setDescription('Currently available commands (including Admin commands):')
			.addFields(
				{ name: '‎', value: '‎'},
				{ name: '**Basic Commands**', value: '‎'},
				{ name: '**r!help**', value: 'Shows a list of all the commands.' },
				{ name: '**r!invite**', value: 'Get the invite link for this bot.'},
				{ name: '**r!hello (shutting down soon)**', value: 'Just a simple hello.' },
				{ name: '‎', value: '‎'},
				{ name: '**Fun Commands**', value: '‎'},
				{ name: '**r!yeet**', value: 'Yeet peoples you mention, just for fun.' },
				{ name: '**r!gn**', value: 'Says goodnight to the mentioned user. Respect them.'},
				{ name: '**r!pump**', value: 'Shoot a pump to mentioned user and see how many you damaged them.'},
				{ name: '**r!snipe**', value: 'Snipe those scared kids and see how much you damaged them.'},
				{ name: '**r!fullsweat**', value: 'Full sweat on a mentioned user and see what you did.'},
				{ name: '‎', value: '‎'},
				{ name: '**Admin Commands (You are verified an admin)**', value: '‎'},
				{ name: '**r!ping**', value: 'Test command.' },
				{ name: '**r!server**', value: 'Shows the name of the server this bot is on.' },
				{ name: '**r!clear**', value: 'Delete/clear messages mentioned.' },
				{ name: '**r!avatar**', value: 'Shows the avatar of that person.' },
				{ name: '‎', value: '‎'},
				{ name: '**Coming Soon!**', value: 'Apparently we are unable to create a music bot. We will add other features like the fun commands. Stay tuned.'},
			)
			.setFooter('Ryam v1b • Help Menu')

		const helpsenddmsuccess = new Discord.MessageEmbed()
			.setColor('#1CE300')
			.setTitle(`Verified Admin - Sent in DMs!`)
			.setDescription(`Help Command List (Admin Included) has been sent to your DMs, ${message.author}!`)

		const helpcancelled = new Discord.MessageEmbed()
				.setColor('#FC712C')
				.setTitle('Cancelled.')
				.setDescription('You either didn\'t respond or pressed ❌.')
		
		if (message.member.hasPermission('ADMINISTRATOR')) {
			message.react('👍').then(() => message.react('👎'));

		const filter = (reaction, user) => {
			return ['❓', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
	};

		message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
			.then(collected => {
				const reaction = collected.first();

				if (reaction.emoji.name === '❓') {
					message.channel.send(helpsenddmsuccess)
					message.author.send(adminhelpembed);
				} else {
					message.channel.send(helpcancelled);
		}
	})
			.catch(collected => {
				message.channel.send(helpcancelled);
		});
				}else const filternoadmin = (reaction, user) => {
				return ['❓', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
			};
		
				message.awaitReactions(filternoadmin, { max: 1, time: 60000, errors: ['time'] })
					.then(collected => {
						const reaction = collected.first();
		
						if (reaction.emoji.name === '❓') {
							message.channel.send(helpembed);
						} else {
							message.channel.send(helpcancelled);
				}
			})
					.catch(collected => {
						message.channel.send(helpcancelled);
				});
	},
};