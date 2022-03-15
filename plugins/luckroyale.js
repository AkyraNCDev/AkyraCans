let handler = async m => m.reply(`
「 LUCK ROYALE 」

#spingold
  Prize Round
  • String 1-30
  • Kayu 1-30
  • Arloji 1-1
  • Potion 1-10
  • Diamond 1-10-15
  • Common 1-50
  • Uncommon 1-50
  • Mytic 0-1-10-30
  • Legendary 0-1-10-20
  • Sampah 1-1000


Comming Soon
#spingold2
#spinlimit
#mysteryspin

3 Fitur Diatas Dalam Tahap Pengembangan Dan Belum Selesai (Banyak Tugas:)) 
`.trim()) // Tambah sendiri kalo mau
handler.help = ['luckroyale'] 
handler.tags = ['rpg'] 
handler.command = /^(luckroyale)$/i

module.exports = handler