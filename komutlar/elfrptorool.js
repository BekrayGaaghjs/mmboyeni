const Discord = require('discord.js');
const db = require('quick.db');
const djstürkiye = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || djstürkiye.prefix;
  let kobs = args.join(' ');
  if(!args[0] || !(kobs).includes('(uye)')) return message.reply(`Sunucuya üye katılınca, kayıt kanalına atılacak mesajı belirtmelisin! \n\`Örn:\` ${prefix}kayıt-hoşgeldin-mesajı (uye) hoş geldin! Kayıt olmak için ${prefix}kayıt isim yaş`)
  await db.set(`kayithosgeldinmesaji_${message.guild.id}`, kobs)
  message.reply(`Sunucuya üye katılınca, kayıt kanalına atılacak mesaj başarıyla ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayit-hosgeldin-mesaji'],
  permLevel: 0
};

exports.config = {
  name: 'hoşgeldin',
  aliases: []
};