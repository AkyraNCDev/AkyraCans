let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/cecan?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['cecan']
handler.tags = ['image']
handler.command = /^(cecan)$/i
handler.limit = true
handler.register = true
module.exports = handler
