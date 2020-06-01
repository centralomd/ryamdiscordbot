const Discord = require('discord.js');

module.exports = {
	name: 'fullsweat',
    description: 'Full sweat on a mentioned user and see what you did.',
    cooldown: 3,
	execute(message, args) {
        const fullsweaterr = new Discord.MessageEmbed()
                .setColor('#FC712C')
                .setTitle('Creative is down :cry:')
                .setDescription('You can\'t sweat on yourself, bruh. Mention someone!')
        if (!message.mentions.users.size) {
            return message.channel.send(fullsweaterr);
        }
        const taggedUser = message.mentions.users.first();

        const sweatbuild = ["10 mats.", "150 mats.", "255 mats.", "578 mats.", "690 mats.", "1150 mats.", "2690 mats.", "all the mats."]
        const sweatbuildres = Math.floor((Math.random() * sweatbuild.length));
        
        const sweatfail = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('Eliminated!')
            .setDescription(`${message.author} tried to sweat hard on **${taggedUser.username}**, but instead ${message.author} got 200 pumped.`)

        const sweatsuccess = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('Elimination!')
            .setDescription(`${message.author} eliminated **${taggedUser.username}** after sweating hard and wasted ` + sweatbuild[sweatbuildres])

        const sweatorfail = [sweatfail, sweatsuccess]
        const sweatorfailres = Math.floor((Math.random() * sweatorfail.length));
        
        message.channel.send(sweatorfail[sweatorfailres]);
    },
};