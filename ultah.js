let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Memuat Data📂*\n*■□□□□□□□□□ 10%*')
  let res = `http://lolhuman.herokuapp.com/api/ephoto1/birthdaycake?apikey=AryaKey&text=${response}`
  conn.sendFile(m.chat, res, 'ultah.jpg', `Selamat Ulang Tahun ${response}`, m, false)
}
handler.help = ['ultah'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(ultah)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba