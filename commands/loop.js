const { DiscordAPIError } = require("discord.js");

module.exports = {
	name: 'loop',
	description: 'Loop a command',
    aliases: [],
	async execute(message, args, Discord, client, queue, looping) {
        if (!looping.has(message.guild.id)) return looping.set(message.guild.id, true)

        const serverQueue = queue.get(message.guild.id);
        const loopCheck = looping.get(message.guild.id);
        var checkingProcess;

        if (loopCheck === false) {
            looping.set(message.guild.id, true);
            
            checkingProcess = setInterval(() => {
                if (serverQueue.songs.length < 1){

                } 
            }, 1000);
        }
        if (loopCheck === true) return looping.set(message.guild.id, false);
	},
};