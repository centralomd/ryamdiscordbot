const Discord = require('discord.js');
const Enmap = require('enmap');

module.exports = {
	name: 'oneloop',
	description: 'Loop currently playing music.',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping, oneLoop) {
        if (!oneLoop.has(message.guild.id)) oneLoop.set(message.guild.id, 'false')

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = oneLoop.get(message.guild.id);
        var checkingProcess;

        if (loopCheck === 'false') {
          oneLoop.set(message.guild.id, 'true');
          const onLoopEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`♾ ${message.guild.name}: Looped!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Loop__`, value: `✅ Enabled` },
                { name: `__Requestor__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • Loop: ✅Enabled')
          message.channel.send(onLoopEmbed);
        }
        if (loopCheck === 'true') { 
          oneLoop.set(message.guild.id, 'false')
          const offLoopEmbed = new Discord.MessageEmbed()
            .setColor('#FF98FD')
            .setAuthor(`Music • ${message.author.tag}`, message.author.avatarURL())
            .setTitle(`➡ ${message.guild.name}: Unlooped!`)
            .addFields(
                //{ name: `\u200b`, value: `\u200b` },
                { name: `__Loop__`, value: `❌ Disabled` },
                { name: `__Requestor__`, value: `${serverQueue.songs[0].requestor}` }
            )
            .setFooter('Music System • Loop: ❌Disabled')
          message.channel.send(offLoopEmbed);
        }
	},
};