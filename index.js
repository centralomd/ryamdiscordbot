const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();

bot.once('ready', () => {
    console.log('Ryam bot is now online and running!')
    bot.user.setActivity('with Codes', { type: 'PLAYING'}).catch(console.error);
})


bot.on('message', message=>{

    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}hello`)) {
        message.channel.send('Hi! How are you?');
    } else if (message.content === `${prefix}server`) {
        const servername = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name}`)
            .setDescription('This is the name of the server this bot is on.')
        message.channel.send(servername);
    }







   
})

bot.login(process.env.token);