const Discord = require('discord.js');
const Enmap = require('enmap');

module.exports = {
	name: 'loop',
	description: 'Loop a whole queue.',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping) {
        if (!looping.has(message.guild.id)) looping.set(message.guild.id, false)

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = looping.get(message.guild.id);
        var checkingProcess;

        if (loopCheck === false) {
          looping.set(message.guild.id, true);
          message.channel.send('♾ Loop has been enabled!  **BETA**');
        }
        if (loopCheck === true) { 
          looping.set(message.guild.id, false)
          message.channel.send('➡ Loop has been disabled!  **BETA**');
        }
	},
};