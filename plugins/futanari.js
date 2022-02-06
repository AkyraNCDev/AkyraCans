let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/futanari?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['futanari']
handler.tags = ['hentai']
handler.command = /^(futanari)$/i
handler.limit = true
handler.register = true
module.exports = handler
