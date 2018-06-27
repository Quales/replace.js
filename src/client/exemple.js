const Replace = require("replace.js");
const bot = new Replace.Client("REPLACE TOKEN")//token of Replace API

//See the documentation to get a token


const Discord = require("discord.js")
const bbot = new Discord.Client()
bbot.on("message", msg => bot.addMsg(msg))
bbot.login("BOT TOKEN HERE ;)")
bbot.on("ready", () => console.log("Ready as %s", bbot.user.tag)) // show in console the name of the Discord bot

bbot.on("message", msg => {
	if (msg.content.startsWith("-profile")) {
		bot.get(msg.author.id, u => {
			if (u.id != undefined) { // the result is an user (not an error)
				msg.channel.send("Number of messages : " + u.msgs + "\nLevel: " + u.level)
			}else{
				console.log(u) // view in console some errors
			}
		})
	}
})
