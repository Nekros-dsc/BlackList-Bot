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
const express = require('express');
const colors = require("colors");
const server = express();
server.all('/', (req, res)=>{
    res.send('Nova World is Here')
})
function keepAlive(){
  server.listen(3000, ()=>{
      console.log(`
_______________________________

[✅]===> HOST IS READY  
_______________________________    

      `.yellow)
  });
}
module.exports = keepAlive;