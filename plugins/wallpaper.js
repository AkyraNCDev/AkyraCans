let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/wallpaper?apikey=AryaKey', '', '', m)
}
handler.help = ['wallpaper']
handler.tags = ['image']
handler.command = /^(wallpaper)$/i
handler.limit = true
handler.register = true
module.exports = handler
