let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/wink?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['dance']
handler.tags = ['anime']
handler.command = /^(dance)$/i
handler.limit = true
handler.register = true
module.exports = handler
