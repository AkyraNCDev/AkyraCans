let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=AryaKey', '', '', m)
}
handler.help = ['ecchi']
handler.tags = ['hentai']
handler.command = /^(ecchi)$/i
handler.limit = 3
handler.register = true
module.exports = handler
