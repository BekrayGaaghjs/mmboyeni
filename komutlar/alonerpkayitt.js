const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
  

  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if(message.member.roles.cache.some(r => r.id === "756491270112673832"))
  
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`⚙  **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('**Hoşgeldin Kayıt Olduktan Sonra Kuralları Okumayı Unutma** <@&787242203859648533> <@&787242203859648532> <@&787242203856109587> <@&787242203856109586> <@&787242203859648534>');


  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`⚙ **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'kayit',
  aliases: []
};

