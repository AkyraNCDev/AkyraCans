let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=AryaKey', '', '', m)
}
handler.help = ['animebooty']
handler.tags = ['hentai']
handler.command = /^(animebooty)$/i
handler.limit = 3
handler.register = true
module.exports = handler
