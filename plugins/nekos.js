let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch('http://nekos.life/api/v2/img/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nyaa', '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', 'Neko Again🔂', `${usedPrefix + command}`, m,)
}
handler.help = ['neko2']
handler.tags = ['anime']
handler.command = /^(neko2)$/i

module.exports = handler