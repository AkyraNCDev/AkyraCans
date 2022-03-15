let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=AryaKey', '', '', m)
}
handler.help = ['animefeets']
handler.tags = ['hentai']
handler.command = /^(animefeets)$/i
handler.limit = 3
handler.register = true
module.exports = handler
