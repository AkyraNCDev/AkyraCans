//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, 'Punya 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', require('awesome-phonenumber')('+6285159258830'). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], 'Punya 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', require('awesome-phonenumber')('+6285159258830'). getNumber('international'))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['colong']
handler.tags = ['sticker']
handler.command = /^colong$/i
handler.owner = true

module.exports = handler