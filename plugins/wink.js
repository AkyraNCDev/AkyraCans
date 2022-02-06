let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wink?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['wink']
handler.tags = ['anime']
handler.command = /^(wink)$/i
handler.limit = true
handler.register = true
module.exports = handler
