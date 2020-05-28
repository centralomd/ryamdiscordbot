const Discord = require('discord.js');

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
        const noreload = new Discord.MessageEmbed()
            .setColor('#F03D3D')
            .setTitle('NOTHING TO RELOAD')
            .setDescription(`You didn't pass any command to reload, ${message.author}!`)

		if (!args.length) return message.channel.send(noreload);
            const commandName = args[0].toLowerCase();
            const command = message.client.commands.get(commandName)
	            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            const reloaderror = new Discord.MessageEmbed()
                .setColor('#F03D3D')
                .setTitle('RELOAD ERROR')
                .setDescription(`There is no command with name or alias \`${commandName}\`, ${message.author}!`)
        if (!command) return message.channel.send(reloaderror);

        delete require.cache[require.resolve(`./${command.name}.js`)];
        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }

            const reloadsuccess = new Discord.MessageEmbed()
                .setColor('#1CE300')
                .setTitle('Reload Successfull.')
                .setDescription(`Command \`${command.name}\` was reloaded!`)

        message.channel.send(reloadsuccess);
	},
};