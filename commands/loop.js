const Discord = require('discord.js');
const Enmap = require('enmap');

module.exports = {
	name: 'loop',
	description: 'Loop a whole queue.',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping, oneLoop) {
        if (!looping.has(message.guild.id)) looping.set(message.guild.id, 'false');

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = looping.get(message.guild.id);
        var checkingProcess;

        if (loopCheck === 'false') {
          looping.set(message.guild.id, 'true');
          const onLoopEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`♾ ${message.guild.name}: Queue Looped!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Queue Loop__`, value: `✅ Enabled` },
                { name: `__Requestor__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • Loop: ✅Enabled')
          message.channel.send(onLoopEmbed);
        }
        if (loopCheck === 'true') { 
          looping.set(message.guild.id, 'false')
          const offLoopEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`➡ ${message.guild.name}: Queue Unlooped!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Queue Loop__`, value: `❌ Disabled` },
                { name: `__Requestor__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • Loop: ❌Disabled')
          message.channel.send(offLoopEmbed);
        }
	},
};