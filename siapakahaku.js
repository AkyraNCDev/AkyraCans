let fetch = require('node-fetch')

let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Selesaikan Dulu Sesi Ini Untuk Melanjutkan Sesi Berikutnya', conn.siapakahaku[id][0])
        throw false
    }
    let res = await fetch(global.API('bg', '/siapakahaku', {}))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status !== true) throw json
    let caption = `
    「 𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛 𝗔𝗞𝗨」\n
 *${json.result.soal}*

⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
🔎Ketik ${usedPrefix}who Untuk Bantuan
🎁Prize: ${poin} XP
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu Untuk Menjawab Habis!\nJawabannya Adalah *${json.result.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i

module.exports = handler