let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=rey2k21', '', '', m)
}
handler.help = ['animebooty']
handler.tags = ['hentai']
handler.command = /^(animebooty)$/i
handler.limit = true
handler.register = true
module.exports = handler
