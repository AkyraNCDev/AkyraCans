let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nSaya Adalah 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃, 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃 Adalah Sebuah Bot Yang Bisa Membantumu Di Grup Ini, Klik Tombol Dibawah Ini Jika Kamu Ingin Menggunakan Bot!`.trim(), `${wm}`, '⋮☰ Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler

let wm = global.botwm