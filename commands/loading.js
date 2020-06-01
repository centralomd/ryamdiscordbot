const Discord = require('discord.js');

module.exports = {
	name: 'loading',
    description: 'Loading Test',
    cooldown: 5,
	execute(message, args) {
        if(!args[1]) return message.channel.send('Beginning test...')
        .then(message => message.delete({timeout: 1000}))
        .then(message.channel.send('Loading | '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading / '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading - '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading \ '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading | '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading | '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading / '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading - '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading \ '))
        .then(message => message.delete({timeout: 500}))
        .then(message.channel.send('Loading | '))
        .then(message => message.delete({timeout: 500}))
    },
};