let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=rey2k21', '', '', m)
}
handler.help = ['hentai']
handler.tags = ['hentai']
handler.command = /^(hentai)$/i
handler.limit = true
handler.register = true
module.exports = handler
