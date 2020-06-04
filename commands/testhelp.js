const Discord = require('discord.js');

module.exports = {
	name: 'testhelp',
	description: 'List all the available commands test.',
	cooldown: 2,
	execute(message, args) {

    const failargs = new Discord.MessageEmbed()
      .setTitle('no args 0 or 1')
      .setDescription('lmao')

    if(!args[0]) return message.channel.send(failargs);
    if(!args[1]) return message.channel.send(failargs);

    const messageselect = args.slice(1).join(" ");

  message.channel.cache.fetchMessage(messageselect).then(message => {
    message.react(args[0]) //This is assuming that you are splitting the message content into an array, So it will get the first element.
  })

  },
};