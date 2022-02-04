let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Nsfw 𝗡𝗢𝗧 𝗔𝗖𝗧𝗜𝗩𝗘'
     json = (await Neko.nsfw.kitsune()).url
   conn.sendFile(m.chat, json, 'kitsune.jpg', 'wangyy', m, false)
}
handler.help = ['kitsune']
handler.tags = ['hentai']
handler.command = /^kitsune$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler