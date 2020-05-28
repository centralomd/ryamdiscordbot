const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ryam bot is now online and running!')
    client.user.setActivity('with Codes', { type: 'PLAYING'}).catch(console.error);
})


client.on('message', message=>{
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}hello`)) {
        message.channel.send('Hi! How are you?');
    } else if (message.content === `${prefix}server`) {
        const servername = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle(`${message.guild.name}`)
            .setDescription('This is the name of the server this bot is on.')
        message.channel.send(servername);
    } else if (command === 'yeet') {
        const yeeterror = new Discord.MessageEmbed()
                .setColor('#E81515')
                .setTitle('MENTION UNDEFINED')
                .setDescription('You did not mention anyone.')
        if (!message.mentions.users.size) {
            return message.channel.send(yeeterror);
        }
        const taggedUser = message.mentions.users.first();
        const yeetembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('YEET!')
            .setDescription(`${message.author} yeeted ${taggedUser.username} sky-high.`)
        message.channel.send(yeetembed);
    } else if (command === 'avatar') {
        const oneavatarembed = new Discord.MessageEmbed()
            .setColor('#E96A00')
            .setTitle('Requested Avatar')
            .setURL(`<${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`)
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    }







   
})

client.login(process.env.token);