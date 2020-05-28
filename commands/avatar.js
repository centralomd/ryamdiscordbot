const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'Gives link to your avatar, or the avatar of peoples you mention.',
    cooldown: 10,
	execute(message, args) {
		const oneavatarembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('Requested Avatar')
            .setDescription(`<${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
        if (!message.mentions.users.size) {
            return message.channel.send(oneavatarembed);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        message.channel.send(avatarList);
    },
};