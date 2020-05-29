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
                .setColor('#E81515')
                .setTitle('Nobody to aim?')
                .setDescription('Why are you attempting to shoot the air? Mention someone!')
        if (!message.mentions.users.size) {
            return message.channel.send(pumpundefined);
        }

        let replies = ["blank shot.", "8 damage.", "23 damage.", "69 damage.", "100 damage", "169 damage", "200 damage"];

        let result = Math.floor((Math.random() * replies.length));

        const pumpembed = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('PEW!')
            .setDescription(`${message.author} tagged **${taggedUser.username}** for `, replies[result])
        message.channel.send(pumpembed)
    },
};