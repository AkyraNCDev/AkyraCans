let handler = async m => m.reply(`
「 KORUPSI 」

Corruption Choice:
#korupsi1 - 10Rb (Lv.0/1Limit)
#korupsi2 - 100Rb (Lv.5/3Limit)
#korupsi3 - 1Jt (Lv.7/5Limit)
#korupsi4 - 10Jt (Lv.10/10Limit)
#korupsi5 - 100Jt (Lv.20/20Limit)
#korupsi6 - 1M (Lv.70/140Limit)
#korupsi7 - 10M (Lv.120/300Limit)
#korupsi8 - 100M (Lv.240/400Limit)
#korupsi9 - 1T (Lv.370/700Limit)
#korupsi10 - 10T (Lv.400/1000Limit)
#korupsi11 - 100T (Lv.600/1500Limit)
#korupsi12 - 1Kd (Lv.750/2000Limit)
#korupsi13 - 1Kt (Lv.900/3800Limit)
#korupsi14 - 1St (Lv.1000/5000Limit)
#korupsi15 - 1Ot (Lv.1500/10000Limit)
#korupsi16 - 1Nn (Lv.2000/40000Limit)
#korupsi17 - 1Ds (Lv.3000/100000Limit)

*⚠️WARNING⚠️*
Jangan Tergoda Sama Banyaknya Hasil Korupsi, Lu Kira Lu Bakal Dapat Mudah? Semakin Besar Hasil Korupsi Maka Besar Juga Peluang Minus
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bansos'] 
handler.tags = ['rpg'] 
handler.command = /^(bansos)$/i
handler.register = true
module.exports = handler