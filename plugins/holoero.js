let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.lolhuman.xyz/api/random2/holoero?apikey=AryaKey`)
  heum = await res.buffer()
  await m.reply(global.wait)
  conn.sendButtonImg(m.chat, heum, 'This Is HOLOERO', wm, '𝐍𝐄𝐗𝐓⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['holoero']
handler.tags = ['hentai']

handler.command = /^(holoero)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.limit = 5
handler.fail = null

module.exports = handler

