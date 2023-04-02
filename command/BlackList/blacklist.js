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
const bl = require('../../me-modals/blacklist/blacklisted')
const me = require('../../me-config.json')
const devs = me.dev
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "blacklist",
   category: "Security",
   description: "\`Pour ajouter un membre à la BlackList\`",
   run: async (client, kmsg, args, PREFIX) => {
    if (!devs.includes(kmsg.author.id)) {
        return kmsg.reply(`
> **\⛔ Impossible d'exécuter la commande **
> * Raison : cette commande est réservée aux propriétaires du bot*
        `);
    }
    let target = kmsg.mentions.members.first() || kmsg.guild.members.cache.get(args[0])
    if(!target) {
      return kmsg.reply(`
> **\⛔ Impossible d'exécuter la commande ** 
> ** **
`)

    }
    let reason = args[1]
    if(!reason){
        return kmsg.reply(`
> **\⛔ Impossible d'exécuter la commande ** 
> **Reason:  Quel est la raison de la BlackList **
        `)
    }
    if(devs.includes(target.id)){
        return kmsg.reply(`
> **\⛔ Impossible d'exécuter la commande ** >
> **Reason:  Vous ne pouvez pas utiliser cette commande sur un Owner Bot**
        `)
    }
    let DATA = await bl.findOne({
        UserID: target.id
    })
    if(DATA) {
        return kmsg.reply(`
> **\⛔ Impossible d'exécuter la commande ** 
> **Reason:  Cette personne est déjà sur la BlackList**
        `)
    }
    if(!DATA){
        DATA = await bl.create({
            UserID: target.id,
            Reason: reason,
            Time: Date.now(),
        })
        DATA.save().catch(e => console.log(e));
    }
    let user = await bl.findOne({
        UserID: target.id
    })
    let me = client.guilds.cache.map(async g=>{
      try {
        g.members.cache.get(user.UserID).ban({ reason: user.Reason }).catch(e);
      } catch(e) {
        console.log(` `)
      }
        
    })
    kmsg.channel.send(`
    > **🌐 ${target} Cette personne a été ajoutée à la BlackList **
    > **Reason: ${reason} **
    `)


    }
 }
