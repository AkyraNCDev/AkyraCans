let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=rey2k21', '', '', m)
}
handler.help = ['ahegao']
handler.tags = ['hentai']
handler.command = /^(ahegao)$/i
handler.limit = true
handler.register = true
module.exports = handler
