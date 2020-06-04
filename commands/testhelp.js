const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all the available commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 10,
	execute(message, args) {

    const failargs = new Discord.MessageEmbed()
      .setTitle('no args 0 or 1')

    if(!args[0] && !args[1]) return 

    let messageselect = args.slice(1).join(" ");

  message.channel.fetchMessage(messageselect).then(message => {
    message.react(argument[0]) //This is assuming that you are splitting the message content into an array, So it will get the first element.
  })

  },
};