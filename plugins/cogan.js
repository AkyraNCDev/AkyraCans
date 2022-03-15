let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cowo?APIKEY=AryaKey', '', '', m)
}
handler.help = ['cogan']
handler.tags = ['image']
handler.command = /^(cogan)$/i
handler.limit = 3
handler.register = true
module.exports = handler
