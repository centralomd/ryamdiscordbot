const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'Gives link to your avatar, or the avatar of peoples you mention.',
    cooldown: 10,
	execute(message, args) {
        function getUserFromMention(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);
        
            if (!matches) return;
            
            const id = matches[1];
        
            return client.users.cache.get(id);
        }
		const oneavatarembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('Requested Avatar')
            .setDescription(`<${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
        if (!message.mentions.users.size) {
            return message.channel.send(oneavatarembed);
        }
        
        const userinvalid = new Discord.MessageEmbed()
            .setColor('#F03D3D')
            .setTitle('MENTION ERROR')
            .setDescription('Please use a proper mention if you want to see someone else\'s avatar.')
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.send(userinvalid);
            }
        }

        const avatarList = message.mentions.users.map(user => {
            const multiavatar = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle(`${user.username}'s avatar:`)
            .setDescription(`<${user.displayAvatarURL({ format: "png", dynamic: true })}>`)
            return message.channel.send(multiavatar);
        });
        message.channel.send(avatarList);
    },
};