const Discord = require('discord.js');

module.exports = {
    name: 'yeet',
    description: 'Yeet any person you mention. For fun.',
    cooldown: 7,
    guildOnly: true,
	execute(message, args) {
		const yeeterror = new Discord.MessageEmbed()
                .setColor('#E81515')
                .setTitle('MENTION UNDEFINED')
                .setDescription('You did not mention anyone.')
        if (!message.mentions.users.size) {
            return message.channel.send(yeeterror);
        }
        const taggedUser = message.mentions.users.first();
        
        const high = ["1 meter high.", "20 meters high.", "69 meters high.", "150 meters high.", "500 meters high.", "1 km high."];
        const highres = Math.floor((Math.random() * high.length));
        
        const reverseyeet = new Discord.MessageEmbed()
            .setColor('#FC712C')
            .setTitle('YEE- What?!')
            .setDescription(`**${taggedUser.username}** expected an incoming yeet, so **${taggedUser.username}** yeeted ${message.author} first before ${message.author} could even yeet them.`)

        const yeetembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('YEET!')
            .setDescription(`${message.author} yeeted **${taggedUser.username}** ` + high[highres])
            
        const reverseorhigh = [reverseyeet, yeetembed]
        const revorhires = Math.floor((Math.random() * reverseorhigh.length));
        
        message.channel.send(reverseorhigh[revorhires]);
    },
};