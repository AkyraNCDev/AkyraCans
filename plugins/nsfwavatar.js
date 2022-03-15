let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/nsfw_avatar?apikey=AryaKey', '', '', m)
}
handler.help = ['nsfwavatar']
handler.tags = ['hentai']
handler.command = /^(nsfwavatar)$/i
handler.limit = true
handler.register = true
module.exports = handler
