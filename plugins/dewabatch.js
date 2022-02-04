let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/darkjokes?apikey
  let json = await res.buffer()
  conn.sendFile(m.chat, json, 'dewabatch.jpg', `Nih Animenya`, m, false)
}
handler.help = ['loli']
handler.tags = ['siususw']
handler.command = /^sisuis$/i
handler.register = true

module.exports = handler
