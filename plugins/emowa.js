const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh:\n\n${usedPrefix + command} ❤️\n\n*Hanya Bisa 1 Emoji!*`
    if (text.includes('<')) throw `Contoh: \n\n${usedPrefix + command} ❤️\n\n*Hanya Bisa 1 Emoji!*`
    try {
        emoji.get(`${text}`)
            .then(async emoji => {
                let url = emoji.images[4].url
                console.log(url)
                let stiker = await sticker(false, url, global.packname, global.author)
                conn.sendMessage(m.chat, stiker, MessageType.sticker, {
                    quoted: m
                })
            })
    } catch (e) {
        conn.sendMessage('6282331033919-1613453247@g.us', `\`\`\` EMOWHATSAPP\`\`\`\n\nCommand: ${command}\nFrom: @${m.sender.split('@')[0]}\nError: ${e}`.trim(), MessageType.text, { contextInfo: { mentionedJid: [m.sender] } })
        throw `_*Hanya Boleh 1 Emoji!*_`
    }
}
handler.help = ['emowa <emoji>']
handler.tags = ['sticker']
handler.command = /^emowa$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.register = true
handler.botAdmin = false
handler.fail = null
handler.limit = 1
handler.exp = 15
module.exports = handler