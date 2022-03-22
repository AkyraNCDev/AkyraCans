let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wallnime?apikey=AryaKey', '', '', m)
}
handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i
handler.limit = true
handler.register = true
module.exports = handler
