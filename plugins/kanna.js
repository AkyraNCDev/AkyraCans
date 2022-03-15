let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/kanna?apikey=AryaKey', '', '', m)
}
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i
handler.limit = true
handler.register = true
module.exports = handler