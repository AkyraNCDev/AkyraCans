let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/lewdkemo?apikey=rey2k21', '', '', m)
}
handler.help = ['lewdkemo']
handler.tags = ['hentai']
handler.command = /^(lewdkemo)$/i
handler.limit = true
handler.register = true
module.exports = handler
