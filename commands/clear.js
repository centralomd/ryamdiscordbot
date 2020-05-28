const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'Clears or delete messages.',
    cooldown: 15,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;
        const delfail = new Discord.MessageEmbed()
            .setColor('#F03D3D')
            .setTitle('ERROR')
            .setDescription('Oops, that doesn\'t seem to be a valid number.')
        const delamountfail = new Discord.MessageEmbed()
            .setColor('#F03D3D')
            .setTitle('Amount Error')
            .setDescription('You need to input a number between 1 and 99.')
        const delsuccess = new Discord.MessageEmbed()
            .setColor('#1CE300')
            .setTitle('Deletion Success.')
            .setDescription('The number of messages chosen has been deleted!')
        const clearadminbad = new Discord.MessageEmbed()
            .setColor('#F03D3D')
            .setTitle('Action Disallowed.')
            .setDescription('You don\'t have the required role.')
        if (isNaN(amount)) {
            return message.channel.send(delfail);
        } else if (amount < 1 || amount > 100) {
            return message.channel.send(delamountfail);
        } message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        if (!message.member.roles.find(r => r.name === "Owner" || "Admin")) return message.channel.send(clearadminbad)
        });
        message.channel.send(delsuccess);
    },
};