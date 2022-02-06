let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/shota?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i
handler.limit = true
handler.register = true
module.exports = handler
