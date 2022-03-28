let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
RULES ❦ʀᴇɴ-ʙᴏᴛ
1. Dilarang Melakukan Spam
2. Dilarang Meniru Pesan Bot
3. Dilarang Menghina Bot/Owner
4. Dilarang Send Virus WA
5. Dilarang Chat Gak Jelas
6. Dilarang Menggoda Owner
7. Bot Online 24 Jam (Off Karena Lag)

S&K ❦ʀᴇɴ-ʙᴏᴛ
1. Owner Tidak Bertanggung Jawab Dengan Fitur Yang Kalian Gunakan
2. Bot Tidak Menyimpan Data Pribadi Kalian
3. Bot Menjaga Privasi Kalian

*Melanggar??? = BANNED*
${wm}
`.trim(), 'Harap Patuhin Peraturan Tersebut', '⋮☰ Menu', '.menu', 'Owner', '.nowner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler

let wm = global.botwm