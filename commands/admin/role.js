const { MessageEmbed } = require("discord.js");
const {prefix} = require("../../config.js")
module.exports = {
  name: "role",
  aliases: ["رول"],
  description: "Add or remove a roll from a member",
  usage: ["!role @user"],
  category: "admin",
  botPermission: ["MANAGE_ROLES"],
  authorPermission: ["MANAGE_ROLES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {

    

    
    if (!args[1]) return await message.channel.send({content: `** 🙄 Please menion a user exemple : ${prefix}role <user>**`});
    
    let member = message.guild.members.cache.get(args[0]) || 
    message.mentions.members.first(); 
    let role = message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(r => message.content.split(" ").slice(1).join(" ").toLowerCase().includes(r.name.toLowerCase())) || message.mentions.roles.first()

    if (!member) return await message.channel.send({content: `🙄 **I can't find this member.**`});
     if (!role) return await message.channel.send({content: `🙄 **I can't find this role.**`});

    if (member.roles.cache.has(role.id)) {
      await member.roles.remove(role.id);
      await message.channel.send({content: `✅ **Done Removed role**`});
    }else{
      await member.roles.add(role.id);
      await message.channel.send({content: `✅ **Done Addedn role**`}); 
    }


  
  }}
    
 