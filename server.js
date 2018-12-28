var opts = require('./options.json')
var procc = require('./procc')

const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', msg => {

console.log(opts.prefix)
if(msg.content === "Hrd Rld"){
opts = require('./options.json')
procc = require('./procc')
return msg.reply("Reload")
}
if(msg.content.slice(0,opts.prefix.length) === opts.prefix){procc.rec(msg, opts.prefix.length);}

})

client.login(opts.token);
