const fs = require('fs');
const Discord = require('discord.js');
const prefix = 'r?'
const queue = new Map();
const { getLyrics, getSong } = require('genius-lyrics-api');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const status = [
    "with bread", 
    "with centralomd", 
    "Music", 
    "Internal Spotify", 
    "in the VC"
];

const Enmap = require('enmap');
const looping = new Enmap({
  name: "looping",
  fetchAll: false,
  autoFetch: true,
  cloneLevel: 'deep'
});


client.once('ready', () => {
    looping.defer.then( () => {
    console.log(looping.size + " looping datas loaded.");
    looping.set('Undefined', true);
    });

	    console.log(`${client.user.username} is online and running! With:\n Username: ${client.user.username}`)

    setInterval(() => {
        const statuses = Math.floor(Math.random() * (status.length - 1) + 1);
        client.user.setPresence({ activity: { name: `${status[statuses]} | r?help`, type: "PLAYING" }, status: 'idle' })
    }, 60000);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName)
		|| client.commands.find(command => command.aliases && command.aliases.includes(commandName));

    if (!command) return;

    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    if (message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    try {
	    command.execute(message, args, Discord, client, queue);
    } catch (error) {
	    console.error(error);
	    message.reply('there was an error trying to execute that command!');
    }
});

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);
// login to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);