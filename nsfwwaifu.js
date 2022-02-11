let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/nsfw/waifu')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'gweh sange >//<', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nsfwwaifu']
handler.tags = ['nsfw']
handler.command = /^(nsfwwaifu)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
