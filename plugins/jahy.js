let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.xteam.xyz/randomimage/jahy?APIKEY=d81ce7556c32afe3`)
  heum = await res.buffer()
  conn.sendButtonImg(m.chat, heum, 'This Is JAHY', wm, 'Next⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['jahy']
handler.tags = ['hentai']

handler.command = /^(jahy)$/i
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

