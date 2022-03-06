let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ahegao?APIKEY=HIRO', '', '', m)
}
handler.help = ['ahegao']
handler.tags = ['hentai']
handler.command = /^(ahegao)$/i
handler.limit = 3
handler.register = true
module.exports = handler
handler.level = 25