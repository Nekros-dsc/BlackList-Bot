/*
             ________________________________________________
            /                                                \
           |    _________________________________________     |
           |   |                                         |    |
           |   |Nova World BlackList System By Nova World|    |
           |   |                                         |    |
           |   |       Devloper ["Nekros"]               |    |
           |   |                                         |    |
           |   |     Discord discord.gg/novaworld        |    |
           |   |                                         |    |
           |   |   All rights reserved to Nova World     |    |
           |   |                                         |    |
           |   |  If there is any error, just visit the  |    |
           |   |                                         |    |
           |   |  discord.gg/novaworld Discord Server    |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
            \_________________________________________________/
                   \___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_
 _-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.`-_
:-------------------------------------------------------------------------:
`---._.-------------------------------------------------------------._.---'
*/
const Discord = require("discord.js");
const discord = require("discord.js");
const kingman = require("./alive/keep_work.js")
const { MessageEmbed  ,  Collection , Client } = require("discord.js");
const client = new Client()
client.commands = new discord.Collection();
client.eventss = new discord.Collection();
client.aliases = new discord.Collection();
const fs = require('fs');
kingman();
const colors = require("colors");
const TOKEN_BOT = process.env['ME_TOKEN']
const config = require('./me-config.json');
const PREFIX = config.prefix
client.on("error", console.error);
["command", "events"].forEach(p => {
  require(`./me-handler/${p}`)(client);
});
client.on('message', kmsg => {
  const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (kmsg.content.match(pmention)) {
    return kmsg.reply(`**Mon préfix est: ${PREFIX}**`)
  }
  if (kmsg.author.bot) return;
  if (!kmsg.guild) {
    return kmsg.reply("**Marche que en serveur et non en dm**")
  }
  let prefix = PREFIX;
const args1 = kmsg.content.slice(prefix.length).split(/ +/);
  if (!kmsg.content.startsWith(PREFIX)) return;
  const args = kmsg.content
    .slice(PREFIX.length)
    .trim() 
    .split(/ +/g); 
  const kmcommand = args.shift().toLowerCase();
  if (kmcommand.length === 0) return;
  let kmcode = client.commands.get(kmcommand);
  if (!kmcode) kmcode = client.commands.get(client.aliases.get(kmcommand));
  if (kmcode) kmcode.run(client, kmsg, args, PREFIX , prefix);
});


process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log("RejectionHandled: " + err, origin);
 

 return;
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [AntiCrash] :: Uncaught Exception/Catch");
  console.log(err, origin);


  return

});

process.on("unhandledRejection", (reason, p) => {

  
  console.log("unhandledRejection: " + reason, p);
  
  
  

 return;
});

process.on("rejectionHandled", err => {
  console.log("RejectionHandled: ", err);

 
  return;
});


process.on("multipleResolves", (type, promise, reason) => {
  console.log(type, promise, reason);

 

  return;
});

client.login('MTA5MTk5NzMzNzc4MzYzNjAwOA.G8n490.Kd0AgqoEtDotad7Buhlfk-wzRzBSqjuthyxa_0')//token