let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

	axios.get(`http://hujanapi.xyz/api/apkpure?query=${text}&apikey=qrQuAVo14XfmRIr`).then ((res) => {
	 	let hasil = `
Nama App : ${res.result._data.title}
Link download : ${res.result._data.link}
Mau langsung download? Ketik .apkdl (link tersebut)`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['apk (kata kunci)']
handler.tags = ['938372']
handler.command = /^(82762)$/i
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
