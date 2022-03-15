let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elaina?apikey=AryaKey', '', '', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i
handler.limit = true
handler.register = true
module.exports = handler
