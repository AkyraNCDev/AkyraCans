let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://ryuu-apii.herokuapp.com/api/nsfw/foot?apikey=RyuBotz`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'This Is FOOT', wm, 'Next⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['foot']
handler.tags = ['hentai']

handler.command = /^(foot)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.limit = 5
handler.level = 19
handler.fail = null

module.exports = handler

