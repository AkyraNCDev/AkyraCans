let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/erofeet?apikey=AryaKey', '', '', m)
}
handler.help = ['erofeet']
handler.tags = ['hentai']
handler.command = /^(erofeet)$/i
handler.limit = 4
handler.register = true
module.exports = handler
