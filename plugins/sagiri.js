let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=AkyraKey', '', '', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i
handler.limit = true
handler.register = true
//udah di maapin kan?
module.exports = handler