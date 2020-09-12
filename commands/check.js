const Discord = require('discord.js');

module.exports = {
	name: 'check',
	description: 'Check the loop command: Only for Test Project.',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping) {
        if (!looping.has(message.guild.id)) return looping.set(message.guild.id, false)

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = looping.get(message.guild.id);

        message.channel.send(loopCheck);
	},
};