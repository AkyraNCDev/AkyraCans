let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/shinobu?apikey=LOLKONTOL09', '', '', m)
}
handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i
handler.limit = true
handler.register = true
module.exports = handler
