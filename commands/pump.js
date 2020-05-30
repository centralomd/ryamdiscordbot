const Discord = require('discord.js');

module.exports = {
	name: 'pump',
    description: 'Shoot a pump to mentioned user and see how many you damaged them.',
    cooldown: 3,
	execute(message, args) {
    //setup
        const taggedUser = message.mentions.users.first();
    //answer
        const pumpundefined = new Discord.MessageEmbed()
                .setColor('#1CE300')
                .setTitle('PEW!')
                .setDescription(`${message.author} shot the air for 0 damage!`)
        if (!message.mentions.users.size) {
            return message.channel.send(pumpundefined);
        }

        const dmg = ["blank shot.", "8 damage.", "23 damage.", "69 damage.", "100 damage", "169 damage", "200 damage", "220 damage"];
        const dmgres = Math.floor((Math.random() * dmg.length));

        const pumpembed = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PEW!')
            .setDescription(`${message.author} tagged **${taggedUser.username}** for ` + dmg[dmgres])

        const pumpembed2 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PEW!')
            .setDescription(`${message.author} tagged **${taggedUser.username}** for ` + dmg[dmgres])

        const pumpembed3 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PEW!')
            .setDescription(`${message.author} tagged **${taggedUser.username}** for ` + dmg[dmgres])
        
        const pumpembed4 = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PEW!')
            .setDescription(`${message.author} tagged **${taggedUser.username}** for ` + dmg[dmgres])

        const pumpammoout = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('Crk!')
            .setDescription(`Your ammo run out. Instead of tagging, **${taggedUser.username}** tagged you for ` + dmg[dmgres])

        const dmgormiss = [pumpembed, pumpembed2, pumpembed3, pumpembed4, pumpammoout]
        const dmgormissres = Math.floor((Math.random() * dmgormiss.length));

        message.channel.send(dmgormiss[dmgormissres])
    },
};