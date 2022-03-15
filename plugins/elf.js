let handler = async (m, { conn }) => {
await m.reply(global.wait)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=AryaKey', '', '', m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i
handler.limit = true
handler.register = true
module.exports = handler
