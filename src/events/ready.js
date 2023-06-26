const { Events } = require('discord.js')

module.exports = {
	name: Events.ClientReady,
	onde: true,
	execute(client) {
		console.log((`The bot is logged in as ${client.user.tag}`));
	},
}