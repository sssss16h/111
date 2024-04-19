const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "kick",
  aliases: ["طرد"],
  description: "kick members",
  usage: [""],
  category: "admin",
  botPermission: ["KICK_MEMBERS"],
  authorPermission: ["KICK_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {


    
  let id = message.content.split(' ').slice(1).join(' ')
    let user = message.mentions.members.first() || message.guild.members.cache.get(id)
    if (!user) return message.reply(`** 🙄 Please mention member or id**`)
    if(user.roles.highest.position > message.guild.members.resolve(safaa.user).roles.highest.position) return message.reply(`** ❌ You can't kick this user **`)
    user.kick().then(() => message.reply(`**✅@${user.user.username} kicked from the server!**`)).catch(err => message.reply(err))
    
     }
  }