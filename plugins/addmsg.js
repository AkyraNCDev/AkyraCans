let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw '*Reply Pesan!*'
    if (!text) throw `📍 Gunakan *${usedPrefix}list${which}* Untuk Melihat Listnya`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `❗ '${text}' Telah Terdaftar Di List Pesan`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`✔️ Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
▸ Akses Dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler