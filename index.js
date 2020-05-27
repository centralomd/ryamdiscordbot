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
            if(!args[1]) return message.reply('Available commands: `r!info bot`, `r!info version`.')

            if(args[1] === 'version'){
                const embed = new Discord.MessageEmbed()
                .setTitle(version)
                .setDescription('***This is the cuurent bot version.***')
                .setColor('0xFFC300')
                message.channel.send(embed)
            }
            if (args[1] === 'bot'){
                    message.channel.send('This bot currently only send simple texts. More advanced commands coming soon!')
            }else{
                message.channel.send('Argument 1 Not found or Invalid Command.')
            }
            break;
        case 'clear':
            if(!message.member.roles.cache.find(r => r.name === "Nyam")) return message.channel.send('Action not granted. Reason: "Nyam" role required.')
            if(!args[1]) return message.reply('Please input a number.')
            .then(message => message.delete({timeout:4500}));
            message.channel.bulkDelete(args[1]);
            break;
    }
})

bot.login(process.env.token);