let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/classic?apikey=AryaKey', '', '', m)
}
handler.help = ['classic']
handler.tags = ['hentai']
handler.command = /^(classic)$/i
handler.limit = 4
handler.register = true
module.exports = handler
