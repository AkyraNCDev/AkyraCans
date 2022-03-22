let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/blowjob?apikey=AryaKey', '', '', m)
}
handler.help = ['blowjob']
handler.tags = ['hentai']
handler.command = /^(blowjob)$/i
handler.limit = 5
handler.register = true
module.exports = handler