# Replace.js

## Example usage
```js
const Replace = require("replace.js");
const client = new Replace.Client("REPLACE TOKEN");

const Discord = require("discord.js")
const bot = new Discord.Client()
bot.on("message", msg => client.addMsg(msg))
bot.login("DISCORD BOT TOKEN HERE")

```

# Get a Token
To get a token, go to (It's limited at 2 tokens a day)
### http://vps470919.ovh.net:3000/api/register

##get(id, callback):
#### This function return an object
#### If the object.id isset, it's an user object and you can use that.
#### Else, it's maybe an error, or a status like the creation of the user.
#### The user object have an id, a level, some money, a number of messages
#### This is an exemple of user object : 
```js
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
