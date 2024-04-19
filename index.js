const express = require('express');
const app = express();
const chalk = require("chalk");
const path = require('path');




const Discord = require("discord.js");

const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents } = require("discord.js");
const db2 = require("pro.db")
const config = require("./config.js");
const {prefix} = require("./database.json");
const safaa = new Discord.Client({
  intents: new Discord.Intents(32767),
  restTimeOffset: 0,
  allowedMentions:  { parse: ["everyone", "roles", "users"], repliedUser: false }, partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});


const db = require("quick.db");
const ms = require("ms");
safaa.commands = new Discord.Collection();
safaa.aliases = new Discord.Collection();
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(safaa);
});


// لا تحذف شي ولا تعدل على شي رجاءا
// الاكواد مشفره فلا تحاول :)
safaa.on('ready', async () => {
  var _0xb562=["\x2F","\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C","\x6A\x6F\x69\x6E","\x73\x65\x6E\x64\x46\x69\x6C\x65","\x67\x65\x74","\x2F\x70\x69\x6E\x67","\x73\x65\x6E\x64","\x75\x73\x65","\x53\x61\x66\x61\x61\x20\x6D\x61\x64\x65\x20\x74\x68\x69\x73\x2E","\x69\x74\x61\x6C\x69\x63","\x72\x65\x64","\x6C\x6F\x67","\x62\x6F\x6C\x64","\x67\x72\x65\x65\x6E","\x62\x6C\x75\x65","\x79\x65\x6C\x6C\x6F\x77","\x62\x6C\x61\x63\x6B","\x6C\x69\x73\x74\x65\x6E"];app[_0xb562[4]](_0xb562[0],function(_0xc025x1,_0xc025x2){_0xc025x2[_0xb562[3]](path[_0xb562[2]](__dirname,_0xb562[1]))});app[_0xb562[7]](_0xb562[5],(_0xc025x1,_0xc025x2)=>{_0xc025x2[_0xb562[6]]( new                        Date())});app[_0xb562[17]](3000,()=>{console[_0xb562[11]](chalk[_0xb562[10]][_0xb562[9]](_0xb562[8]));console[_0xb562[11]](chalk[_0xb562[13]][_0xb562[12]](_0xb562[8]));console[_0xb562[11]](chalk[_0xb562[14]][_0xb562[9]](_0xb562[8]));console[_0xb562[11]](chalk[_0xb562[15]][_0xb562[12]](_0xb562[8]));console[_0xb562[11]](chalk[_0xb562[16]][_0xb562[9]](_0xb562[8]))})
	var _0xb4fe=["\x70\x72\x65\x66\x69\x78","\x67\x65\x74","","\x53\x61\x66\x61\x61\x20\x6D\x61\x64\x65\x20\x74\x68\x69\x73\x20\x66\x6F\x72\x20","\x74\x61\x67","\x75\x73\x65\x72","\x62\x6F\x6C\x64","\x77\x68\x69\x74\x65","\x6C\x6F\x67"];const db3= await db2[_0xb4fe[1]](_0xb4fe[0]);const dba=`${_0xb4fe[2]}${config[_0xb4fe[0]]}${_0xb4fe[2]}`&& db3;console[_0xb4fe[8]](chalk[_0xb4fe[7]][_0xb4fe[6]](`${_0xb4fe[3]}${safaa[_0xb4fe[5]][_0xb4fe[4]]}${_0xb4fe[2]}`))
  safaa.user.setStatus("idle")
 safaa.user.setActivity(`${dba}help`, { type: 'STREAMING', url: "https://www.twitch.tv/kyle" }) 
  var _0x3960=["\x67\x75\x69\x6C\x64\x4D\x65\x6D\x62\x65\x72\x41\x64\x64","\x4C\x49\x4E\x4B","\x73\x65\x74\x53\x74\x79\x6C\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x7A\x41\x58\x54\x7A\x4B\x56\x54\x6D\x45","\x73\x65\x74\x55\x52\x4C","\x73\x65\x72\x76\x65\x72\x20\x73\x75\x70\x70\x6F\x72\x74","\x73\x65\x74\x4C\x61\x62\x65\x6C","\x61\x64\x64\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74\x73","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x57\x65\x6C\x63\x6F\x6D\x65\x20\x74\x6F\x20\x53\x65\x72\x76\x65\x72\x2E\x20\x57\x65\x20\x75\x73\x65\x20\x61\x20\x62\x6F\x74\x20\x73\x79\x73\x74\x65\x6D\x20\x77\x69\x74\x68\x20\x6D\x61\x6E\x79\x20\x63\x6F\x6D\x6D\x61\x6E\x64\x73\x3A\x20\x20\x53\x75\x70\x70\x6F\x72\x74\x20\x4D\x61\x6E\x79\x20\x53\x6F\x75\x72\x63\x65\x73\x20\x2A\x2A\x47\x65\x6E\x65\x72\x61\x6C\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x2C\x20\x2A\x2A\x41\x64\x6D\x69\x6E\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x20\x2C\x20\x2A\x2A\x4F\x77\x6E\x65\x72\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x2A\x2A\x20\x2C\x20\x6D\x61\x64\x65\x20\x62\x79\x20\x2A\x2A\x53\x61\x66\x61\x61\x2F\x4B\x59\x4C\x45\x2A\x2A","\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x63\x6F\x6D\x2F\x61\x70\x69\x2F\x6F\x61\x75\x74\x68\x32\x2F\x61\x75\x74\x68\x6F\x72\x69\x7A\x65\x3F\x73\x61\x66\x61\x61\x5F\x69\x64\x3D\x34\x34\x34\x34\x26\x70\x65\x72\x6D\x69\x73\x73\x69\x6F\x6E\x73\x3D\x30\x26\x73\x63\x6F\x70\x65\x3D\x62\x6F\x74","\x73\x65\x6E\x64","\x6F\x6E"];safaa[_0x3960[13]](_0x3960[0],(_0xd10cx1)=>{const _0xd10cx2= new MessageActionRow()[_0x3960[7]]( new MessageButton()[_0x3960[6]](_0x3960[5])[_0x3960[4]](_0x3960[3])[_0x3960[2]](_0x3960[1]));let _0xd10cx3= new Discord.MessageEmbed()[_0x3960[4]](`${_0x3960[11]}`)[_0x3960[10]](`${_0x3960[9]}`)[_0x3960[8]]();_0xd10cx1[_0x3960[12]]({embeds:[_0xd10cx3],components:[_0xd10cx2]})})
//////////////////////////////// SAFAA /////////////////////////////////////////////

});
////////////////////////////////

var _0x3bfa=["\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x65\x6E\x76","\x6C\x6F\x67\x69\x6E"];safaa[_0x3bfa[4]](process[_0x3bfa[3]].SaFaeYT)[_0x3bfa[2]]((_0x9df2x1)=>{console[_0x3bfa[1]](_0x9df2x1[_0x3bfa[0]])})

   //////////////////////////////// SAFAA /////////////////////////////////////////////




// perry / sys







//////////////////////////////// SAFAA /////////////////////////////////////////////



//////////////////////////////// SAFAA /////////////////////////////////////////////



// Code Suggestion
let sug = ["1044396308380799018","",""]; // حط اي دي روم الاقتراحات
let line = "https://media.discordapp.net/attachments/924275324118761522/972214113210097714/Sans_titre.pnglin.png"; // حط رابط الخط
safaa.on("messageCreate", function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()
.setAuthor({name: message.author.tag,iconURL: 
 message.author.avatarURL({dynamic:true})})
.setColor(`BLUE`)
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}//////////////////////////////// SAFAA /////////////////////////////////////////////

message.channel.send({ embeds: [embed] }).then(msg => {
 msg.react(`👍`).then(() => {
 msg.react('👎')
})
message.channel.send({files: [line]});
})
.catch(console.error) 
  }
});  







//////////////////////////////// SAFAA /////////////////////////////////////////////



safaa.on('messageCreate', async (message) => {
if(message.author.bot) return;
const db3 = await db2.get("prefix")
const dba = `${config.prefix}` && db3
    if (message.content.toLowerCase().startsWith(dba + 'id')) {//////////////////////////////// SAFAA /////////////////////////////////////////////


        const TargerMember = message.mentions.members.first();

        if(TargerMember) {
           message.reply(`ايدي العضو : ${TargerMember.id}`)
        }

        if(!TargerMember) {
         message.reply(`ايدي العضو : ${message.author.id}`) 
         }
        
    }
})


process.on("unhandledRejection", error => {
  return console.log(error)
});
//////////////////////////////// SAFAA /////////////////////////////////////////////


safaa.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;//////////////////////////////// SAFAA /////////////////////////////////////////////

  const db3 = await db2.get("prefix")
const dba = `${config.prefix}` && db3
  if (message.content.toLowerCase() === dba + "link" ||
    message.content == `رابط`) {
    var invite = await message.channel.createInvite({
      maxAge: 604800,
      max: 5
    });

      message.react("✅").catch(err => { })
    .catch(err =>
      message.react("❌").catch(err => { }))
    message.author.send(`**User** : 5\n**Time** : 12h\n**Link** : ${invite.url}`);
  }
});


//////////////////////////////// SAFAA /////////////////////////////////////////////


setTimeout(() => {
  if (!safaa || !safaa.user) {
    console.log("Process Kill")
    process.kill(1);
  } else {
    console.log("You have logged in")
  }
}, 3*1000*60);


//////////////////////////////// SAFAA /////////////////////////////////////////////





//kyle