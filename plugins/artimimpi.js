let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*Contoh Penggunaan*\n\n#artimimpi mati', m)

  await m.reply('[❗]  𝗪𝗮𝗶𝘁, 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀')
	axios.get(`https://api.caliph71.xyz/api/artimimpi/?mimpi=${text}&apikey=caliphganz`).then ((res) => {
	 	let hasil = `*ARTI MIMPIMU💭*\n\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['artimimpi'].map(v => v + ' <mimpimu>')
handler.tags = ['keranh']
handler.command = /^(artimimpi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler