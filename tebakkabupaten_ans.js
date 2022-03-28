const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekb/i.test(m.quoted.contentText)) return !0
    this.tebakkabupaten = this.tebakkabupaten ? this.tebakkabupaten : {}
    if (!(id in this.tebakkabupaten)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakkabupaten[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkabupaten[id][1]))
        if (['.tekb', '𝐁𝐀𝐍𝐓𝐔𝐀𝐍🔎', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.title.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakkabupaten[id][2]
            await this.sendButton(m.chat, `*Jawaban BENAR⭕*\n🎁Prize +${this.tebakkabupaten[id][2]} XP`, '❦ʀᴇɴ-ʙᴏᴛ', '𝐌𝐀𝐈𝐍 𝐋𝐀𝐆𝐈🔂', '.tebakkabupaten', m)
            clearTimeout(this.tebakkabupaten[id][3])
            delete this.tebakkabupaten[id]
        } else if (similarity(m.text.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) m.reply(`*Jawaban HAMPIR BENAR*`)
        else m.reply(`*Jawaban SALAH❌*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
