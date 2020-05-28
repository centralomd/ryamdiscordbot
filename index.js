const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
    console.log('Ryam bot is now online and running!')
    client.user.setActivity('r!help', { type: 'LISTENING'}).catch(console.error);
})


client.on('message', message=>{
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const commandName = args.shift().toLowerCase();

const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

if (command.guildOnly && message.channel.type !== 'text') {
	return message.reply('I can\'t execute that command inside DMs!');
}

    const errorcommand = new Discord.MessageEmbed()
        .setColor('#F03D3D')
        .setTitle('EXECUTION ERROR')
        .setDescription('Command failed to execute, or command doesn\'t exist.')

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        // ...
    }

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            const coolerror = new Discord.MessageEmbed()
                .setColor('#F03D3D')
                .setTitle('COMMAND IN COOLDOWN')
                .setDescription(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
            return message.channel.send(coolerror);
        }
    } 
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
	    command.execute(message, args);
    } catch (error) {
	    console.error(error);
	    message.channel.send(errorcommand);
    } 







   
})

client.login(process.env.token);