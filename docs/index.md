# Replace.js doc

### Api by [Quales](https://github.com/Quales/) and doc by [Jus de Patate](https://github.com/jusdepatate)

## Content :

-   [TLDR code example](#tldr-code-example)
    
-   [How to send messages](#how-to-send-messages)
    
-   [How to get user info](#how-to-get-user-info)
    

### TLDR code example

```javascript
const Client = require("replace.js");
const bot = new Client("REPLACE TOKEN")//token of Replace API
const prefix = "-" // prefix you want

const Discord = require("discord.js")
const bbot = new Discord.Client()
bbot.on("message", msg => bot.addMsg(msg))
bbot.login("BOT TOKEN HERE ;)")
bbot.on("ready", () => console.log("Ready as %s", bbot.user.tag)) // show in console the name of the Discord bot

bbot.on("message", msg => {
    if (msg.content.startsWith(prefix + "profile")) {
        bot.get(msg.author.id, u => {
            if (u.id != undefined) { // the result is an user (not an error)
                const embed = new Discord.RichEmbed()
            embed.setTitle("Your profile")
                embed.setAuthor(bbot.user.username, bbot.user.avatarURL)
                embed.setColor(0x00AE86)
                embed.setFooter(bbot.user.username, bbot.user.avatarURL);
                embed.setImage("http://vps470919.ovh.net:3000/widget/" + u.id + ".png")
                embed.addField("Powered by Replace.js")
                embed.setTimestamp()
                msg.channel.send({embed});
            } else{
                console.log(u) // view in console some errors
            }
        })
    }
})
```

**Explanation :**

at line 2 you will need a token, get it from [here](http://vps470919.ovh.net:3000/api/register) (2 token/day/ip)

at line 3 you will need to define the prefix for your discord bot (don't use "!" so much bot have it)

at line 8 you will need your discord *bot* token, get it from [here](https://discordapp.com/developers/applications/me)

### How to send messages

```
bbot.on("message", msg => bot.addMsg(msg))
```

bbot is a Discord bot user, bot is a Replace.js user (see example from TL;DR)

### How to get user info

**If you want a pre-generated image use this code :**

```javascript
    if (msg.content.startsWith(prefix + "profile")) {
        bot.get(msg.author.id, u => {
            if (u.id != undefined) { // the result is an user (not an error)
                const embed = new Discord.RichEmbed()
            embed.setTitle("Your profile")
                embed.setAuthor(bbot.user.username, bbot.user.avatarURL)
                embed.setColor(0x00AE86)
                embed.setFooter(bbot.user.username, bbot.user.avatarURL);
                embed.setImage("http://vps470919.ovh.net:3000/widget/" + u.id + ".png")
                embed.addField("Powered by Replace.js")
                embed.setTimestamp()
                msg.channel.send({embed});
            } else{
                console.log(u) // view in console some errors
            }
        })
    }
```

bbot is a Discord bot user, bot is a Replace.js user, prefix is a Discord bot prefix (see example from TL;DR)

**If you prefer a text use this code**

```javascript
    if (msg.content.startsWith(prefix + "profile")) {
        bot.get(msg.author.id, u => {
            if (u.id != undefined) { // the result is an user (not an error)
                msg.channel.send("Number of messages : " + u.msgs + "\nLevel: " + u.level)
            } else{
                console.log(u) // view in console some errors
            }
        })
}
```

bbot is a Discord bot user, bot is a Replace.js user, prefix is a Discord bot prefix (see example from TL;DR)

This is not the only things that you can get, remember a user object is something like this :

```json
{
    "id_ctr": 1,
    "id": "1",
    "level": 0,
    "money": 10000,
    "name": "Quales",
    "created": "2018-06-24T15:12:47.000Z",
    "msgs": 1,
    "createdTimestamp": 1529853167000
}
```

**If you have any other question, you can contact Quales**

**Made with :heart: and [Mark Text](https://github.com/marktext/marktext) by [Jus de Patate](https://github.com/jusdepatate)**
