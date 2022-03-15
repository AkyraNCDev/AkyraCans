let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=AryaKey', '', '', m)
}
handler.help = ['nsfwtrap']
handler.tags = ['hentai']
handler.command = /^(nsfwtrap)$/i
handler.limit = true
handler.register = true
module.exports = handler
