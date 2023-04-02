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
const colors = require("colors");
const mongoose = require('mongoose')
require('dotenv').config();
const discord = require("discord.js");
const MONGO_DDB = process.env["ME_MONGO"]
module.exports = {
	name: 'ready',
async execute(client) {
    mongoose.connect(MONGO_DDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(console.log(`
_______________________________

[✅]==> Mongo-DB Connection is OK 
_______________________________
    `.brightGreen));
}
}
