let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Memuat Data📂*\n*■□□□□□□□□□ 10%*')
  let res = `https://api.xteam.xyz/randomimage/tentacles?apikey=d81ce7556c32afe3`
  conn.sendFile(m.chat, res, 'tentacles.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['tentacles'].map(v => v + ' ')
handler.tags = ['hentai']

handler.command = /^(tentacles)$/i

module.exports = handler