let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/art?apikey=AryaKey', '', '', m)
}
handler.help = ['art']
handler.tags = ['anime']
handler.command = /^(art)$/i
handler.limit = 1
handler.register = true
module.exports = handler
