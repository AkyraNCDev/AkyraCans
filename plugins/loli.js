let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://ryuu-apii.herokuapp.com/api/wallpaper/nsfwloli?apikey=RyuBotz', '', '', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.limit = 3
handler.register = true
module.exports = handler
