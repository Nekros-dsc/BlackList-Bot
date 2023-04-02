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
   name: "bl-info",
   category: "Security",
   description: "\`Affiche des informations sur la personne dans la BlackList\`",
   run: async (client, kmsg, args, PREFIX) => {
       if(!args[0]) {
           return kmsg.reply(`
           > **\⛔ Impossible d'exécuter la commande ** 
           > **Reason: Vous devez saisir l'identifiant **
           `)
       }
    let DATA = await bl.findOne({UserID: args[0]})
    if(!DATA) {
        return kmsg.reply(`
        > **\⛔ Impossible d'exécuter la commande ** 
        > **Reason: Cette personne n'est pas sur la liste **
        `)
    }
    let info = new MessageEmbed()
    .setTitle(`INFO`)
    .setDescription(`This is Blacklisted User Info`)
    .setColor("GREEN")
    .addFields(
        { name: '**ID**', value: DATA.UserID, inline: false },
        { name: '**Reason**', value: DATA.Reason, inline: false },
        { name: '**Time**', value: DATA.Time.toISOString().split('T')[0], inline: false },
       )
    kmsg.channel.send(info)



    }
 }
