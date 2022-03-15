let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=AryaKey', '', '', m)
}
handler.help = ['armpits']
handler.tags = ['hentai']
handler.command = /^(armpits)$/i
handler.limit = 3
handler.register = true
module.exports = handler
