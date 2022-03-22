let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/poke?apikey=AryaKey', '', '', m)
}
handler.help = ['poke']
handler.tags = ['anime']
handler.command = /^(poke)$/i
handler.limit = true
handler.register = true
module.exports = handler
