let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=rey2k21', '', '', m)
}
handler.help = ['animebooty']
handler.tags = ['hentai']
handler.command = /^(animebooty)$/i
handler.limit = 3
handler.register = true
handler.level = 10
module.exports = handler
