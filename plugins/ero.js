let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'nsfw 𝗡𝗢𝗧 𝗔𝗖𝗧𝗜𝗩𝗘'
     json = (await Neko.nsfw.ero()).url
   conn.sendFile(m.chat, json, 'ero.jpg', 'wangy wangy wangy  > / / / <', m, false)
}
handler.help = ['ero']
handler.tags = ['hentai']
handler.command = /^ero$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.limit = 3
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler