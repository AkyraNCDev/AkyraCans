let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cowo?APIKEY=HIRO', '', '', m)
}
handler.help = ['cogan']
handler.tags = ['image']
handler.command = /^(cogan)$/i
handler.limit = true
handler.register = true
module.exports = handler
