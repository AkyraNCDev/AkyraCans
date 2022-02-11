let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/estetic?apikey=rey2k21', '', '', m)
}
handler.help = ['estetic']
handler.tags = ['image']
handler.command = /^(estetic)$/i
handler.limit = true
handler.register = true
module.exports = handler
