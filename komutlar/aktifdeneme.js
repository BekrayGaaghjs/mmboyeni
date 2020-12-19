const Discord = require('discord.js');


exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = message.guild.channels.cache.find(x => x.name === "di̇scord-bot-log")  ;
  if (!terfiler) return message.reply('`yetki-başvurusu` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne Kazandirirsiniz,Istediniz Yetki,Kac Saat Aktif Olacaginiz,Adiniz,Yasiniz ve Kendinizi Etiketleyin.');
  if (message.mentions.users.size < 1) return message.reply('Isminizi Etiketleyin.').catch(console.error);
  const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
	.setThumbnail("https://cdn.discordapp.com/attachments/777256583281115146/788097550807859261/anigif.gif")
    .setTimestamp()
    .addField('Durum:', 'Bekleniyor')
    .addField('Gonderen Kisi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bilgiler', reason);
	
	return guild.channels.cache.get(terfiler.id).sendEmbed(embed);
};

exports.config = {
  name: 'başvuru',
  aliases: []
};