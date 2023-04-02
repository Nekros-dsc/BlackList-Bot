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
   name: "unblacklist",
   category: "Security",
   description: "\`Pour supprimer le membre de la BlackList\`",
   run: async (client, kmsg, args, PREFIX) => {
    if (!devs.includes(kmsg.author.id)) {
        return kmsg.reply(`
        > **\⛔ Impossible d'exécuter la commande ** 
        > **Reason: Cette commande est réservée aux propriétaires du bot  **
        `);
    }
    let userid = args[0];
    if (!userid) {
        return kmsg.reply(`
        > **\⛔ Impossible d'exécuter la commande **
        > **Reason: Vous devez entrer l'ID **
        `)
    }
    let DATA = await bl.findOneAndDelete({
        UserID: userid
    })
    if(!DATA) {
        return kmsg.reply(`
        > **\⛔ Impossible d'exécuter la commande **
        > **Reason: Cette personne n'est pas sur la liste noire  **
        `)
    }
    kmsg.channel.send(`
    > 🌐**La personne a été retirée de la liste noire **
    `)
    }
 }
