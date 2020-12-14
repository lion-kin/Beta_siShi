const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Nzc5NzUyMDI4ODU1MDc0ODQ2.X7lGqg.OvMBD51oOgUcCDId7xZ_tfrIGa0);//BOT_TOKEN is the Client Secret