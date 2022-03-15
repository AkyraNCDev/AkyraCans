let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/fox_girl?apikey=AryaKey', '', '', m)
}
handler.help = ['foxgirl']
handler.tags = ['image']
handler.command = /^(foxgirl)$/i
handler.limit = true
handler.register = true
module.exports = handler
