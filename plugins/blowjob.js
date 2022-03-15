let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/blowjob?APIKEY=HIRO', '', '', m)
}
handler.help = ['blowjob']
handler.tags = ['hentai']
handler.command = /^(blowjob)$/i
handler.limit = 5
handler.register = true
module.exports = handler