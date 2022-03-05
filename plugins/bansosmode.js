let handler = async m => m.reply(`
Mau Korupsi Bansos Om?
MODE
#bansosnoob - 5
#bansosmedium -  50
#bansoshard - 2000
#bansosextreme -  5000
#bansosimposible - 10000
#bansosimortal - 30000
#bansosmaut - 50000

5 = 50,000
`.trim()) // Tambah sendiri kalo mau
handler.help = ['owner1'] 
handler.tags = ['rpg'] 
handler.command = /^(bansos)$/i

module.exports = handler