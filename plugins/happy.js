let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/happy?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['happy']
handler.tags = ['anime']
handler.command = /^(happy)$/i
handler.limit = true
handler.register = true
module.exports = handler
