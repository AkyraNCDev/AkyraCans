let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/cogan?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['cogan']
handler.tags = ['image']
handler.command = /^(cogan)$/i
handler.limit = true
handler.register = true
module.exports = handler
