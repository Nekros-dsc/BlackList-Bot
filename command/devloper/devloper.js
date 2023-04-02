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
   name: "devlopers",
   category: "devlopers",
   description: "\`Pour afficher les informations de contact avec les développeurs\`",
   run: async (client, kmsg, args, PREFIX) => {
       let devloper = new MessageEmbed()
       .setTitle(`Nova World`)
       .setDescription(`**Nova World**`)
       .addFields(
        { name: '**\📶 GitHub**', value: '**[Click Here]( https://github.com/Nekros-dsc )**', inline: false },
        { name: '**\❤️ Discord Server**', value: '**[Click Here]( https://discord.gg/novaworld )**', inline: false },
       )
       .setFooter('discord.gg/novaworld', 'https://cdn.discordapp.com/attachments/1087301342885851247/1088233264382226554/3d9fc458ac84252336bdb458e941d3e3.png');
       kmsg.channel.send(devloper)

    }
 }
