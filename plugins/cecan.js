let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cewe?APIKEY=HIRO', '', '', m)
}
handler.help = ['cecan']
handler.tags = ['image']
handler.command = /^(cecan)$/i
handler.limit = 3
handler.level = 10
handler.register = true
module.exports = handler
