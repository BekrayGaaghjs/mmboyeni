 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`MBORP`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`**:point_down:|--:diamond_shape_with_a_dot_inside: **MBO RolePlay Bakımdadır**:diamond_shape_with_a_dot_inside:--|:point_down_tone2:\n :pray: **Sunucumuz şuanda bakıma alınmış verdiğimiz rahatsızlık yüzünden özür dileriz** :pray:\n -----------------------------------------------------------\n :pencil: Aktif Olunca Burdan Haberdar Olabilirsiniz :pencil:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/777256583281115146/788097550807859261/anigif.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "bakımda",
  aliases: []
}