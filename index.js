const Discord = require('discord.js');
const bot = new Discord.Client();

var version = 'v1.0beta';

const PREFIX = 'r!';

bot.on('ready', () =>{
    console.log('Ryam bot is now online and running!')
    bot.user.setActivity('with Codes', { type: 'PLAYING'}).catch(console.error);
})

bot.on('message', message=>{

    if(!message.content.startsWith(PREFIX)) return;
    
    let args = message.content.substring(PREFIX.length).split(" ")
    
    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'hello':
            message.channel.send('Hi! How are you?')
            break;
        case 'info':
            message.channel.send('This bot currently only send simple texts. More advanced commands coming soon!')
            break;
        case 'buildstatus':
            const embed = new Discord.MessageEmbed()
            .setTitle(version)
            .setDescription('***This is the current bot version.***')
            .setColor('#E96A00')
            message.channel.send(embed)
            break;
        case 'clear':
            if(!message.member.roles.cache.find(r => r.name === "Nyam")) return message.channel.send('Action not granted. Reason: "Nyam" role required.')
            if(!args[1]) return message.reply('Please input a number.')
            .then(message => message.delete({timeout:4500}));
            message.channel.bulkDelete(args[1]);
            break;

    // Fun Commands - Just for fun ;)

        case 'yeet':
            if (!message.mentions.users.size) {
                return 
                const yeet1 = new Discord.MessageEmbed()
                .setColor('#E81515')
                .setTitle('MENTION UNDEFINED')
                .setDescription('You did not mention anyone.')
                message.channel.send(embed)
            }
                const taggedUser = message.mentions.users.first();
                const yeet2 = new Discord.MessageEmbed()
                .setColor('#E96A00')
                .setTitle('YEET!')
                .setDescription(`${message.author} yeeted ${taggedUser.username} sky-high.`)
                message.channel.send(embed)
            break;
    }
})

bot.login(process.env.token);