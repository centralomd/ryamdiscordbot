module.exports = {
	name: 'help',
	description: 'List all the available commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [].push();
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

        return message.author.send(data, { split: true })
	        .then(() => {
		        if (message.channel.type === 'dm') return;
		        message.reply('DM has been sent with list of commands.');
	    })
	        .catch(error => {
		    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
		    message.reply('DM failed to be sent. Make sure your DMs are enabled and try again.');
	});
        }
	},
};