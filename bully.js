let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/bully?apikey=rey2k21', '', '', m)
}
handler.help = ['bully']
handler.tags = ['anime']
handler.command = /^(bully)$/i
handler.limit = true
handler.register = true
module.exports = handler
