let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/art?apikey=rey2k21', '', '', m)
}
handler.help = ['art']
handler.tags = ['anime']
handler.command = /^(art)$/i
handler.limit = 5
handler.register = true
module.exports = handler
