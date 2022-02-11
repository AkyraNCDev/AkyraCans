let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/loli?apikey=rey2k21', '', '', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.limit = true
handler.register = true
module.exports = handler
