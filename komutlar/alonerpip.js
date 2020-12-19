 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`MBORP`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`**:diamond_shape_with_a_dot_inside: **MBO RolePlay** :diamond_shape_with_a_dot_inside:\n :mega:**Sunucu İp!!**:mega:\n :diamonds:**Server İP** |:pushpin: **connect 176.98.41.130**:diamonds:\n :diamonds:**TeamSpeak **|:pushpin:  **185.171.1.102:9745 :diamonds:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/777256583281115146/788097550807859261/anigif.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "ip",
  aliases: []
}