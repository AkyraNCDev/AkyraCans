let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=rey2k21', '', '', m)
}
handler.help = ['armpits']
handler.tags = ['hentai']
handler.command = /^(armpits)$/i
handler.limit = true
handler.register = true
module.exports = handler
