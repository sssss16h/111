const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "ban",
  aliases: ["باند"],
  description: "ban a member",
  usage: ["!ban @user"],
  category: "admin",
  botPermission: ["BAN_MEMBERS"],
  authorPermission: ["BAN_MEMBERS"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {
    //////////////////////////////// SAFAA /////////////////////////////////////////////

          
     const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
          
          
                if (!args[0]) return message.reply({ content: `:rolling_eyes: **Please mention member or id**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
                if (!member) return message.reply({ content: `:rolling_eyes: **I can't find this member**`, ephemeral: true }).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })

                if (member.id === message.member.id)
              return message.reply({ content: `:rolling_eyes: **You can't ban ${member.user.username}**`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

                if (message.member.roles.highest.position < member.roles.highest.position)
                        return message.reply({
                                content:
                                        `:rolling_eyes: **You can't ban ${member.user.username} have higher role than you**`
                                , ephemeral: true
                        }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })

             
          
   if (!member.bannable) return message.reply(`:rolling_eyes: **You can't ban ${member.user.username}**`).catch((err) => {
                        console.log(`i couldn't reply to the message: ` + err.message)
                })
          
      return (
      (await member.ban()) +
            message.reply({ content: `:white_check_mark: **${member.user.username} banned from the server!** :airplane:`, ephemeral: true }).catch((err) => {
                                console.log(`i couldn't reply to the message: ` + err.message)
                        })
                );
        },
};

