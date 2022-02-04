let fetch = require('node-fetch')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.sendButton(m.chat, 'Selesaikan Dulu Kuis Ini Kak, Baru Lanjut Kuis Selanjutnya', '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', 'Nyerah', 'nyerah', { quoted: this.game[id].msg })
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
「 𝗙𝗔𝗠𝗜𝗟𝗬𝟭𝟬𝟬 」

✉️ Soal: ${json.soal}

Terdapat ${json.jawaban.length} Jawaban ${json.jawaban.find(v => v.includes(' ')) ? `
(Beberapa Jawaban Terdapat Spasi)
`: ''}

+${winScore} XP🧬 Tiap Jawaban Benar
    `.trim()
    this.game[id] = {
        id,
        msg: await this.sendButton(m.chat, caption, wm, 'Nyerah', 'nyerah'),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.register = true
module.exports = handler

let wm = global.botwm