let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/solo?apikey=AryaKey', '', '', m)
}
handler.help = ['solo']
handler.tags = ['hentai']
handler.command = /^(solo)$/i
handler.limit = 4
handler.register = true
module.exports = handler
