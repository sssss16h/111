const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "info",
  aliases: ["info"],
  description: "help bot",
  usage: ["!help"],
  category: "info",
  botPermission: ["EMBED_LINKS"],
  authorPermission: ["SEND_MESSAGES"],
  cooldowns: [],
  ownerOnly: false,
  run: async (safaa, message, args, config) => {



let bot = `My fucking ping ${safaa.ws.ping}`

   
    message.channel.send(bot)
  }
  }