let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/sticker/patrick?apikey=HIRO', '', '', m)
}
handler.help = ['blush']
handler.tags = ['anime']
handler.command = /^(spatrick)$/i

module.exports = handler