let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['sideoppai']
handler.tags = ['hentai']
handler.command = /^(sideoppai)$/i
handler.limit = true
handler.register = true
module.exports = handler
