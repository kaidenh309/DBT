var server = require('./server.js')

var cmdsL = [];

const cmdType = function(admin, help, string, callable){
  this.admin = admin;
  this.help = help;
  this.string = string;
  this.callable = callable;
}

const build = function(bldCmd){
  if(!cmdsL) cmdsL = [];
  cmdsL.push(bldCmd);
}

const exct = function(Lcmd, Lmsg, Largs){
  for(var i in cmdsL){
    if(cmdsL[i].string === Lcmd){
      if(Lmsg.member.hasPermission('ADMINISTRATOR') || !cmdsL[i].admin){
        return cmdsL[i].callable(Lmsg, Largs);
      }
    }
  }
}

exports.rec = function (impMsg, pref){
impMsg.content = impMsg.content.substring(pref);

this.args = impMsg.content.split(' ');

console.log(this.args[0])

exct(this.args[0], impMsg, this.args);
}

build(new cmdType(false, "Returns pong", "ping", (Cmsg, args)=>{
  Cmsg.reply("pong");
}))
