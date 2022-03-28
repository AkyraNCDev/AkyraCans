let handler = async m => m.reply(`
❗Information Update on 28


ADDITION✉️
1. Perubahan Limit Setiap Fitur
2. Perubahan Syarat Level Setiap Fitur
3. Peningkatan Fitur RPG

*Tidak Ada Informasi Update Lebih Lanjut Yang Diberikan Oleh Owner, Silahkan Cek Sendiri Di #menu*


「 Maret 28 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['lastupdate'] 
handler.tags = ['info'] 
handler.command = /^(lastupdate)$/

module.exports = handler