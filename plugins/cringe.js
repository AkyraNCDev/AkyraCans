let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/cringe?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['cringe']
handler.tags = ['anime']
handler.command = /^(cringe)$/i
handler.limit = true
handler.register = true
module.exports = handler
