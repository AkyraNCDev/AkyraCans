let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

	axios.get(`https://api.lolhuman.xyz/api/apkdownloader?apikey=AryaKey&package=${text}`).then ((res) => {
	 	let hasil = `
Nama App : ${res.result.data.apk_name}
Link Download : ${res.result.data.apk_link}
Mau Langsung Download? Ketik .apkdl (link tersebut)`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apk (kata kunci)']
handler.tags = ['938372']
handler.command = /^(apk)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
