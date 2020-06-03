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
		const helpembedbasic = new Discord.MessageEmbed()
			.setColor('#E96A00')
			.setTitle('Commandlist: Basic')
			.addFields(
				{ name: '‎', value: '‎'},
				{ name: '**r!help**', value: 'Shows a list of all the commands.' },
				{ name: '**r!invite**', value: 'Get the invite link for this bot.'},
				{ name: '**r!hello (shutting down soon)**', value: 'Just a simple hello.' },
			)
			.setFooter('Ryam v1b • Help Menu')

		const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(userId));
		
		
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

		const pages = [helpembedbasic, helpembedfun, helpembedadmin];
		const page = 1;


		message.channel.send(helpembedbasic).then(message => {
			message.react('⬅️').then(() => message.react('❌')).then(() => message.react('➡️'));

			const filter = (reaction, user) => {
				return ['⬅️', '❌', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
			};

			message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
				.then(collected => {
					const reaction = collected.first();

					if (reaction.emoji.name === '⬅️') {
						if (page === 1) return;
						page--;
						helpembedbasic.setFooter(`Page ${page} of ${pages.length}`)
						message.execute(helpembedbasic)
					} if (reaction.emoji.name === '➡️') {
						message.channel.bulkDelete(1, true).then(message =>
							message.channel.send(helpembedfun).then(message => {
								message.react('⬅️').then(() => message.react('❌')).then(() => message.react('➡️'));
					
								const filter = (reaction, user) => {
									return ['⬅️', '❌', '➡️'].includes(reaction.emoji.name) && user.id === message.author.id;
								};
					
								message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
									.then(collected => {
										const reaction = collected.first();
					
										if (reaction.emoji.name === '⬅️') {
											message.channel.bulkDelete(1, true)
											if (page === 1) return;
											page--;
										} if (reaction.emoji.name === '➡️') {
											if (page === pages.length) return;
											page++;
											message.channel.bulkDelete(1, true)
											if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) { return message.channel.send(clearadminbad) 
											} else {
												message.channel.bulkDelete(1, true).then(message =>
													message.channel.send(helpembedadmin).then(message => {
														message.react('⬅️').then(() => message.react('❌')).then(() => message.react('➡️'));
											
														const filter = (reaction, user) => {
															return ['⬅️', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
														};
											
														message.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] })
															.then(collected => {
																const reaction = collected.first();
											
																if (reaction.emoji.name === '⬅️') {
																	message.channel.bulkDelete(1, true)
																	if (page === 1) return;
																	page--;
																} if (reaction.emoji.name === '❌') {
																	message.channel.send(helpcancelled)
																}
													})
															.catch(collected => {
																message.channel.send(helpnoresponse);
													});
												})
												)
											}
										} if (reaction.emoji.name === '❌') {
											message.channel.send(helpcancelled)
										}
							})
									.catch(collected => {
										message.channel.send(helpnoresponse);
							});
						})
						)
					} if (reaction.emoji.name === '❌') {
						message.channel.send(helpcancelled)
					}
		})
				.catch(collected => {
					message.channel.send(helpnoresponse);
		});
	})
//endbrackets
	},
};