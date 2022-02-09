let handler = async m => m.reply(`
.fight
`.trim()) // Tambah sendiri kalo mau
handler.help = ['1daypremium'] 
handler.tags = ['jakaj'] 
handler.customPrefix = /(\?$)/
handler.command = /^(*「 NOT FOUND -  」* [)$/i

module.exports = handler