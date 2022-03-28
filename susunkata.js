let fetch = require('node-fetch')

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
「 𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔 」\n
*${json.soal}*\n
🔖Tipe: ${json.tipe}
⏱️Timeout *${(timeout / 1000).toFixed(2)} detik*
🔎Ketik ${usedPrefix}suka untuk bantuan
🎁Prize: ${poin} XP
`.trim()
    conn.susunkata[id] = [
        await conn.sendButton(m.chat, caption, ' ❦ʀᴇɴ-ʙᴏᴛ ', '𝐁𝐀𝐍𝐓𝐔𝐀𝐍🔎', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendButton(m.chat, `Waktu Untuk Menjawab Habis!\nJawabannya adalah *${json.jawaban}*`, ' ❦ʀᴇɴ-ʙᴏᴛ ', '𝐌𝐀𝐈𝐍 𝐋𝐀𝐆𝐈🔂', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i

module.exports = handler
