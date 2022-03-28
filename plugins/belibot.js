let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `*FREE TO ADD*
Bebas Menambahkan Ke Group Tapi Akan Keluar Jika Melanggar Peraturan Dibawah Ini:

❍ Terdeteksi Spam
❍ Group Sepi Dalam 24 Jam
❍ Tidak Digunakan Dalam 24 Jam
❍ Hanya Boleh Ada 1 Bot Dalam 1 Group

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, '𝐌𝐄𝐍𝐔', '#menu', '𝐎𝐖𝐍𝐄𝐑', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm