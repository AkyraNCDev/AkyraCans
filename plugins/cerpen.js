const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    
    await m.reply(global.wait)
    axios.get(`https://docs-jojo.herokuapp.com/api/cerpen`)
        .then((res) => {
          let hasil = `*💬JUDUL:${res.data.result.title}*\n\n*👤PENGARANG: ${res.data.result.pengarang}*\n*🔖KATEGORI: ${res.data.result.kategori}*\n\n   ${res.data.result.cerpen}`
            conn.reply(m.chat, hasil, m)
        })
        .catch()
}
handler.help = ['cerpen <judul>']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2
handler.register = true
handler.admin = false
handler.botAdmin = false


module.exports = handler
