//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cat']
handler.tags = ['image']
handler.command = /^cat$/i
handler.limit = true
handler.register = true
handler.fail = null

module.exports = handler
