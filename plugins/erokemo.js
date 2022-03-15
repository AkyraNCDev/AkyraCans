let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/erokemo?apikey=AryaKey', '', '', m)
}
handler.help = ['erokemo']
handler.tags = ['hentai']
handler.command = /^(erokemo)$/i
handler.limit = 4
handler.register = true
module.exports = handler
