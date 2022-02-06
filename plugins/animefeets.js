let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['animefeets']
handler.tags = ['hentai']
handler.command = /^(animefeets)$/i
handler.limit = true
handler.register = true
module.exports = handler
