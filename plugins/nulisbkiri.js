let fetch = require('node-fetch')
let limit = 5
let handler = async (m, { conn, command, args }) => {  
try {  let text = args.join` `
  if (!text) return conn.reply(m.chat, 'harap masukan teksmu!!!',m)
  let p = await (await fetch('http://zekais-api.herokuapp.com/bukukiri?text=' +encodeURIComponent(text) )).buffer()
   m.reply('[❗]  𝗪𝗮𝗶𝘁, 𝗜𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀')
  conn.sendFile(m.chat, p, 'image.png' , '*Process Complete✔️*', m, false, {
  thumbnail: Buffer.alloc(0)
      })} catch (e) {
  m.reply (`apikey invalid atau server down`)} 
}
handler.help = ['bukukiri <teks>']
handler.tags = ['nulis']
handler.command = /^bukukiri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 5
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

