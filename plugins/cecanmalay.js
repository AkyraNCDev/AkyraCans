let fetch = require('node-fetch')
async function getRandom(url) {
return Math.floor(Math.random() * url)
}

 let handler  = async (m, { conn }) => {
      conn.sendFile(m.chat, `https://ryuu-apii.herokuapp.com/api/cecan/malaysia?apikey=RyuBotz`, '', ``, m)

}

handler.help = ['cecanmalaysia']

handler.tags = ['image']

handler.command = /^(cecanmalaysia)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.register = true

handler.limit = 5

handler.level = 10


handler.admin = false

handler.botAdmin = false



handler.fail = null



module.exports = handler