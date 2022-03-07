let handler = async m => m.reply(`
Mau Korupsi Bansos Om?

MODE
#bansosnoob - 50Rb
#bansosmedium -  500Rb
#bansoshard - 2Jt
#bansosextreme -  5Jt
#bansosimposible - 10Jt
#bansosimortal - 30Jt
#bansosmaut - 50Jt
#bansosmaster - 200Jt
#bansospdip - 1M

Reset Individual Database Max 3×
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bansos'] 
handler.tags = ['rpg'] 
handler.command = /^(bansos)$/i
handler.register = true
module.exports = handler