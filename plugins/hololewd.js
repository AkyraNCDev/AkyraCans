let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['hololewd']
handler.tags = ['kgfyu']
handler.command = /^(hololewd)$/i
handler.limit = true
handler.register = true
module.exports = handler
