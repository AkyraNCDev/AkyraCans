let fetch = require('node-fetch')
let wm = global.botwm
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  res = await fetch(`https://api.lolhuman.xyz/api/random2/fox_girl?apikey=AryaKey`)
  heum = await res.buffer()
  await m.reply(global.wait)
  conn.sendButtonImg(m.chat, heum, 'This Is FOX GIRL', wm, '𝐍𝐄𝐗𝐓⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['foxgirl']
handler.tags = ['image']

handler.command = /^(foxgirl)$/i
handler.owner = false
handler.mods = false
handler.premium = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.limit = 1
handler.fail = null

module.exports = handler

