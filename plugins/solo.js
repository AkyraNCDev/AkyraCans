let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/solo?apikey=rey2k21', '', '', m)
}
handler.help = ['solo']
handler.tags = ['hentai']
handler.command = /^(solo)$/i
handler.limit = true
handler.register = true
module.exports = handler
