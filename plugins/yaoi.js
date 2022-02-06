let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['yaoi']
handler.tags = ['hentai']
handler.command = /^(yaoi)$/i
handler.limit = true
handler.register = true
module.exports = handler
