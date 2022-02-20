let handler = async m => m.reply(`
❗Information Update on 20


➕ New Features
➖ Features Removed
☑️ Features Fixed



📑Owner's Message
Updatenya Baru 50%, Soalnya Owner Lagi Banyak Tugas Numpuk, Maaf Ya Kawan² Dan Lanjut Besok Aja Updatenya;-;


➕ #sendkontak
➕ #balas
➕ #bonk @user
➕ #fitnahstatus
➕ #kataanime
➕ #notstonk
➕ #stonk
➕ #paling
➕ #cat
➕ #dog
➕ #memesub
➕ #pikachu
➕ #smule
➕ #sr
➕ #suitpvp
➕ #tutorialrpg


➖ Blank


☑️ #fb
☑️ #igstalk
☑️ #detik
☑️ #kompas
☑️ #tribun
☑️ #liputan6
☑️ #jalantikus
☑️ #quotes
☑️ #ssweb
☑️ #textpro
☑️ #judulanime



⚠️Button Gak Respon
Jadi Ketik Manual Aja



「 February 20 」
`.trim()) // Tambah sendiri kalo mau
handler.help = ['lastupdate'] 
handler.tags = ['info'] 
handler.command = /^(lastupdate)$/i

module.exports = handler