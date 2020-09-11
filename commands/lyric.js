const { getLyrics, getSong } = require('genius-lyrics-api');

module.exports = {
	name: 'lyric',
	description: 'Get the lyric for the current playing music.',
  aliases: [],
	async execute(message, args, Discord, client, queue) {
		const serverQueue = queue.get(message.guild.id);
    const currentName = serverQueue.songs[0].title;

    const titleSep = currentName.split('%20');
    
    const options = {
	    apiKey: 'YYexrIviQUFvfKyK5144naZIaK3ZjVtz7oMZZFwLaMiE8vqQOM6RWsZMfrKxILiz',
	    url: `https://api.genius.com/search?q=${titleSep}`
    };

    getLyrics(options).then((lyrics) => {
      const lyricEmbed = new Discord.MessageEmbed()
        .setColor('#FF98FD')
        .setAuthor(`Queue • ${message.author.tag}`, message.author.avatarURL())
        .setTitle(`${currentName}: Lyrics`)
        .setDescription(`\n ${lyrics}`)
        .setFooter('Music System • From centralomd#7083')
    });
	}
};