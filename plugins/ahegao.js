let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ahegao?APIKEY=d81ce7556c32afe3 '', '', m)
}
handler.help = ['ahegao']
handler.tags = ['hentai']
handler.command = /^(ahegao)$/i
handler.limit = 3
handler.register = true
module.exports = handler