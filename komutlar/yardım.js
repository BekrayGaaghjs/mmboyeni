 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`ELFRP Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(` ELF Bot  botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Aktif__`,` \`${prefix}genel\``,true)
.addField(`__Bakımda__`,` \`${prefix}moderasyon\` `,true)
.addField(`__Ip__`,` \`${prefix}guard\`  `,true)
.addField(`__Kayıt__`,` \`${prefix}pk\` `,true)
.addField(`__Havadurumu__`,` \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | Bery'yi Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(``)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yetkiliyardım",
  aliases: []
}