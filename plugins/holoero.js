let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.lolhuman.xyz/api/random2/holoero?apikey=AryaKey`
  conn.sendFile(m.chat, res, 'pussy.jpg', ``, m, false)
}
handler.help = ['holoero'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(holoero)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 4

module.exports = handler