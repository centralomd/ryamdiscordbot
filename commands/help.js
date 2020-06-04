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
	//help pages start
		const helpembedbasic = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Commandlist: Basic')
			.addFields(
				{ name: '‎', value: '‎'},
				{ name: '**r!help**', value: 'Shows a list of all the commands.' },
				{ name: '**r!invite**', value: 'Get the invite link for this bot.'},
				{ name: '**r!hello (shutting down soon)**', value: 'Just a simple hello.' },
				{ name: '‎', value: '‎'},
				{ name: '**Coming Soon!**', value: 'Apparently we are unable to create a music bot. We will add other features like the fun commands. Stay tuned.'},
			)
			.setFooter('Ryam v1b • Help Menu')

		const helpembedfun = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Commandlist: Fun')
			.addField(
				{ name: '‎', value: '‎'},
				{ name: '**r!yeet**', value: 'Yeet peoples you mention, just for fun.' },
				{ name: '**r!gn**', value: 'Says goodnight to the mentioned user. Respect them.'},
				{ name: '**r!pump**', value: 'Shoot a pump to mentioned user and see how many you damaged them.'},
				{ name: '**r!snipe**', value: 'Snipe those scared kids and see how much you damaged them.'},
				{ name: '**r!fullsweat**', value: 'Full sweat on a mentioned user and see what you did.'},
			)
		const helpembedadmin = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Commandlist: Admin')
			.addFields(
				{ name: '‎', value: '‎'},
				{ name: '**r!ping**', value: 'Test command.' },
				{ name: '**r!server**', value: 'Shows the name of the server this bot is on.' },
				{ name: '**r!clear**', value: 'Delete/clear messages mentioned.' },
				{ name: '**r!avatar**', value: 'Shows the avatar of that person.' },
			)
	//help pages end
		const pages = [helpembedbasic, helpembedfun, helpembedadmin]
		const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(userId));
		const delamount = 1
		
		
		const helpadminfail = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Admin Verification: Failure.')
			.setDescription('You do not have the permissions to access this page. Press the back button to go back to the last page.')
			.setFooter('Ryam v1b • Help Menu')

		const helpsenddmsuccess = new Discord.MessageEmbed()
			.setColor('#1CE300')
			.setTitle(`Verified Admin - Sent in DMs!`)
			.setDescription(`Help Command List (Admin Included) has been sent to your DMs, ${message.author}!`)

		const helpcancelled = new Discord.MessageEmbed()
			.setColor('#FC712C')
			.setTitle('Cancelled.')
			.setDescription('Help command page has been cancelled.')
			
		const helpnoresponse = new Discord.MessageEmbed()
			.setColor('#FC712C')
			.setTitle('No response.')
			.setDescription('You didn\'t respond for `30 seconds`.')

		const noentryembed = new Discord.MessageEmbed()
			.setColor('#FC712C')
			.setTitle('Action Blocked.')
			.setFooter('Deleting this message in 5 seconds.')

			pages.forEach((obj, page) => {
				pages[page].embed.fields.push({
				  name: lang.help.title,
				  value: lang.help.links.join('\n'),
				});
			  });
			  let page = command.params[0] ? Number(command.params[0] - 1) : 0;
			  if (page > pages - 1) page = pages.length - 1;
			  if (page < 0) page = 0;
			  caller.utils.pagination(pages, command.msg.channel, command.msg.author.id, page);
//endbrackets
	},
};