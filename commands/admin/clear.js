const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "clear",
  aliases: ["مسح"],
  description: "مسح الشات",
  usage: ["#clear / #مسح"],
  category: "admin",
  botPermission: ["MANAGE_MESSAGES"],
  authorPermission: ["MANAGE_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {

   

  message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 🙄 You don't have permissions **`); 
if(!message.guild.me.permissions.has('MANAGE_MASSAGE')) return message.reply(`** 🙄 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
   
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send({content: `\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``}).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(e => {
    message.channel.send('`Deleting mesaages ..` ').then(function(e) {
    setTimeout(function() {
        message.channel.bulkDelete(messagecount).then(msgs => {
        let msgsize = msgs.size
    message.channel.send({content: `\`\`\`js
${msgsize} messages cleared
\`\`\``}).then(messages => {
setTimeout(() => {
    messages.delete()
}, 4000)
    })
    }).catch(err => 0)
    }, 600)
      
                                                         })
                })

  }} 