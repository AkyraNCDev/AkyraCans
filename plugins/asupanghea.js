let fetch = require('node-fetch')
async function getRandom(url) {
return Math.floor(Math.random() * url)
}

 let handler  = async (m, { conn }) => {
      conn.sendFile(m.chat, `https://ryuu-apii.herokuapp.com/api/asupan/gheayubi?apikey=RyuBotz`, '', ``, m)

}

handler.help = ['asupanghea']

handler.tags = ['hentai']

handler.command = /^(asupanghea)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = true

handler.limit = 3

handler.level = 14


handler.admin = false

handler.botAdmin = false



handler.fail = null



module.exports = handler