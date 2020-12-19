 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`MBORP Yardım Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`MBORP Komutları`)  
.addField(`__Aktif__`,` \`${prefix}aktif (Yetkililer Kullanabilir)\``,true)
.addField(`__Bakımda__`,` \`${prefix}bakımda (Yetkililer Kullanabilir)\` `,true)
.addField(`__İp__`,` \`${prefix}ip \`  `,true)
.addField(`__Kayıt__`,` \`${prefix}kayıt (Kayıttakiler Kullanabilir)\` `,true)
.addField(`__Destek__`,` \`${prefix}destek\` `,true)   
.addField(`__Havadurumu__`,` \`${prefix}havadurumu (Şehir)\` `,true)  
.addField(`__Davet__`,` \`${prefix}davet (Şehir)\` `,true) 
  .setImage(`https://cdn.discordapp.com/attachments/777256583281115146/788097550807859261/anigif.gif`)
.setThumbnail(client.user.avatarURL)  
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}