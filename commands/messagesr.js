const Discord = require('discord.js');

module.exports = {
	name: 'messagesr',
    description: 'See how fast can you type in miliseconds!',
    cooldown: 0,
	execute(message, args) {
        const typespeedbegin = new Discord.MessageEmbed()
            .setColor('#BDD1E6')
            .setTitle('Begin Speedrun')
            .setDescription('Send two messages and I\'ll tell you how far apart you sent them.')
        
            await message.channel.send(typespeedbegin);
            const messages = await message.channel.awaitMessages(m => m.author.id === message.author.id, {
	            max: 2,
	            time: 30e3,
	            errors: ['time'],
            });

            const difference = messages.last().createdTimestamp - messages.first().createdTimestamp;
            const formatted = ms(difference);
            const typespeedend = new Discord.MessageEmbed()
            .setColor('#E81515')
            .setTitle(`${formatted}`)
            .setDescription(`You sent the two messages ${formatted} apart.`)

            message.channel.send(typespeedend);
    },
};