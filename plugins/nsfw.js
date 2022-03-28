let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=AryaKey`)).buffer(), `wangy wangy wangy`, ' ❦ʀᴇɴ-ʙᴏᴛ ', 'Hentai Pic Again🔂', `${usedPrefix + command}`, m, false)
}

handler.help= ['hentaipic']
handler.tags = ['hentai']
handler.premium = true

handler.command = /^hentai(pic)?$/i
module.exports = handler