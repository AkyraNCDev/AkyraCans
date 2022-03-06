let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/hentai?APIKEY=HIRO', '', '', m)
}
handler.help = ['hentai']
handler.tags = ['hentai']
handler.command = /^(hentai)$/i
handler.limit = 5
handler.level = 20
handler.register = true
module.exports = handler
