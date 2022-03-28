let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply(global.wait)
  let res = await (await fetch(`https://api.xteam.xyz/randomimage/uniform?apikey=d81ce7556c32afe3`)).buffer()
  conn.sendButtonImg(m.chat, res, `wangy wangy wangy`, ' ❦ʀᴇɴ-ʙᴏᴛ ', 'Next',`${usedPrefix + command}`, m, false)
}
handler.help = ['uniform']
handler.tags = ['hentai']
handler.limit = true
handler.register = true
//udah di maapin kan?
handler.command = /^(uniform)$/i

module.exports = handler