let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
  
let handler = async (m, { conn }) => {
let caption = `HALO \nSaya 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃\nPilih Menu Di Bawah Yaa Kak\nSpam = Banned\nTelp = Blok\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/FQZcB1IaelbDkEdVWF313Z\n\nUntuk Melihat Menu Bot Ketik .menu`.trim()
conn.send3Button(m.chat, caption, `Powered By Baileys\nCreated NekoBotz By DanishGanz\n`.trim(), '🧾Menu', '.menu', '🍭Owner 🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', '.owner', '📖Info Bot', '.infobot', m)
}

handler.command = /^(hel)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.exp = 20

module.exports = handler