let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/yuri?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['yuri']
handler.tags = ['hentai']
handler.command = /^(yuri)$/i
handler.limit = true
handler.register = true
module.exports = handler
