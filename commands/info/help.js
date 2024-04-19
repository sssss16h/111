const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  description: "help bot",
  usage: ["!help"],
  category: "info",
    botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
const db2 = require("pro.db")

	const db3 =  db2.get("prefix")
const prefix = `${config.prefix}` && db3

    let button = new Discord.MessageActionRow()
let Helefl = new Discord.MessageEmbed()
.setColor('AQUA')
.setTitle(`it's order me.`)

    .setDescription(  `> **admin :**\n \`${prefix}ban\` - حظر العضو من السيرفر. \n \`${prefix}unban\` - فك حظر العضو من السيرفر. \n \`${prefix}unban-all\` -  فك حظر جميع الاعضاء من السيرفر. \n \`${prefix}kick\` - لطرد العضو من السيرفر. \n \`${prefix}lock\` - لاغلاق الشات. \n \`${prefix}unlock\` - لفتح الشات. \n \`${prefix}role\` - لاعطاء عضو رتبه او ازالتها. \n \`${prefix}clear\` - لمسح رسائل الشات. \n \`${prefix}allbans\` - لاظهار جميع الاعضاء المحظورين. \n \`${prefix}hide\` - لاخفاء الشات. \n \`${prefix}show\` - لاظهار الشات. \n \`${prefix}mute\` - لاسكات العضو في الشات. \n \`${prefix}unmute\` -  لفك اسكات العضو في الشات. \n \`${prefix}timeout\` - لاعطاء تايم اوت للعضو. \n \`${prefix}hide-all\` - لاخفاء جميع الرومات. \n \`${prefix}show-all\` لاظهار جميع الرومات. \n\n > **general :** \n \`${prefix}avatar\` - لاظهار افتار العضو. \n \`${prefix}avatar server\` - لاظهار افتار السيرفر. \n \`${prefix}banner\` - لاظهار بنر العضو. \n \`${prefix}roles\` - لاظهار جميع رولات السيرفر. \n \`${prefix}server\` - لاظهار معلومات السيرفر. \n \`${prefix}user\` - لاظهار معلومات المستخدم. \n \`${prefix}id\` - لاظهار ايدي المستخدم. \n \`${prefix}link\` - لارسال رابط السيرفر. \n\n > **owner :** \n \`${prefix}setavatar\` - لتغيير صورة البوت. \n \`${prefix}setprefix\` - لتغيير بريفكس البوت. \n \`${prefix}say\` - لأرسل رسالة لروم معينه.
    
    `)
  
 // .addField(`\`${prefix}setname\` `, `change name bot.`,true)
    //.addField(`\`${prefix}setavatar\``, `change avatar bot`,true)
   //   .addField(`\`${prefix}say\``, `sends a message to the target channel`,true)
      message.author.send({embeds:[Helefl]}).then(eem =>{
        message.react("✅").catch(err =>{
          message.react('❌')
        })
      })
      }
    }