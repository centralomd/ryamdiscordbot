const Discord = require('discord.js');
const bot = new Discord.Client();

var version = '1.0beta';
var buildstatus = 'Beta Test';

const PREFIX = 'r!';

bot.on('ready', () =>{
    console.log('Ryam bot is now online and running!')
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
            if(!args[1]) return message.reply('Available commands: `r!info bot`, `r!info buildstatus`.')

            if(args[1] === 'buildstatus'){
                const embed = new Discord.MessageEmbed()
                .setTitle('Ryam BuildStatus')
                .addField('Status', buildstatus)
                .addField('Version', version)
                .setColor('0xEE6217')
                .setFooter('Ryam v1b • BuildStatus')
                message.channel.send(embed)
            }
            if (args[1] === 'bot'){
                    message.channel.send('This bot currently only send simple texts. More advanced commands coming soon!')
            }else{
                message.channel.send('Argument 1 Not found or Invalid Command. Available commands: `r!info bot`, `r!info buildstatus`.')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Please input a number.')
            message.channel.bulkDelete(args[1]);
            break;
    }
})

bot.login(process.env.token);