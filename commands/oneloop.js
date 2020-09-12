const Discord = require('discord.js');
const Enmap = require('enmap');

module.exports = {
	name: 'oneloop',
	description: 'Loop currently playing music.',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping, oneLoop) {
        if (!looping.has(message.guild.id)) looping.set(message.guild.id, 'true')

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = oneLoop.get(message.guild.id);
        var checkingProcess;

        if (loopCheck === 'false') {
          oneLoop.set(message.guild.id, 'true');
          message.channel.send('♾ Loop has been enabled!  **BETA**');
        }
        if (loopCheck === 'true') { 
          oneLoop.set(message.guild.id, 'false')
          message.channel.send('➡ Loop has been disabled!  **BETA**');
        }
	},
};