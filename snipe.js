const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
    description: 'Snipe those scared kids and see how much you damaged them.',
    cooldown: 3,
	execute(message, args) {
    //setup
        const taggedUser = message.mentions.users.first();
    //answer
        const sniperundefined = new Discord.MessageEmbed()
                .setColor('#1CE300')
                .setTitle('DAR!')
                .setDescription(`${message.author} sniped the air for 0 damage!`)
        if (!message.mentions.users.size) {
            return message.channel.send(sniperundefined);
        }

        const snipedmg = ["blank shot.", "95 damage.", "105 damage.", "127 damage.", "200 damage.", "225 damage.", "315 damage."];
        const snipedmgres = Math.floor((Math.random() * sniperdmg.length));

        const snipehit = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('DAR!')
            .setDescription(`${message.author} sniped **${taggedUser.username}** for ` + snipedmg[snipedmgres])

        const snipemiss = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('D-DAR!')
            .setDescription(`${message.author} attempetd to snipe, but slipped over and **${taggedUser.username}** hit them instead with ` + snipedmg[snipedmgres])

        const snipehit2 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('DAR!')
            .setDescription(`${message.author} sniped **${taggedUser.username}** for ` + snipedmg[snipedmgres])  
        
        const snipehit3 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('DAR!')
            .setDescription(`${message.author} sniped **${taggedUser.username}** for ` + snipedmg[snipedmgres])

        const snipehit4 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('DAR!')
            .setDescription(`${message.author} sniped **${taggedUser.username}** for ` + snipedmg[snipedmgres])
        const snipedmgormiss = [snipehit, snipehit2, snipehit3, snipehit4, snipemiss]
        const snipedmgormissres = Math.floor((Math.random() * snipedmgormiss.length));

        message.channel.send(snipedmgormiss[snipedmgormissres])
    },
};