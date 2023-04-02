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
   name: "list-blacklist",
   category: "Security",
   description: "\`Affiche une liste des membres de la BlackList\`",
   run: async (client, kmsg, args, PREFIX) => {
       let users = []
       let data = await bl.find({});
       data.forEach(async d => {
        users.push(`<@!${d.UserID}>`)
       });
       try{
        let embed = new MessageEmbed()
       .setTitle("**BlackList**")
       .setAuthor(kmsg.author.tag, kmsg.author.displayAvatarURL({ dynamic: true }))
       .setFooter(kmsg.guild.name, kmsg.guild.iconURL())
       .setThumbnail(kmsg.guild.iconURL())
       .addField(`**BLACKLISTED**`, ` \* ${users.join(`\n \*`)}`)
       .setColor("GREEN")
       kmsg.channel.send({ embed: embed })
       } catch(e){
         kmsg.reply(`**AUCUN UTILISATEUR SUR LA BLACK LIST TROUVÉ**`);
       }
    }
 }
