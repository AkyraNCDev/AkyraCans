let fetch = require('node-fetch')

let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
    let id = m.chat
    if (id in conn.tebaklagu) {
        conn.reply(m.chat, 'Selesaikan Dulu Sesi Ini Untuk Melanjutkan Ke Sesi Berikutnya', conn.tebaklagu[id][0])
        throw false
    }
    // ubah isi 'id' kalo mau ganti playlist spotifynya
    let res = await fetch(global.API('xteam', '/game/tebaklagu/', { id: '3AaKHE9ZMMEdyRadsg8rcy' }, 'APIKEY'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let result = await res.json()
    let json = result.result
    if (!result.status) throw json
    let caption = `
*「 TEBAK LAGU 」*

⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
🔎Ketik *${usedPrefix}cek* untuk bantuan
🎁Prize: ${poin} XP

*Balas Pesan Ini Untuk Menjawab!*`.trim()
    conn.tebaklagu[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(async () => {
            if (conn.tebaklagu[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.judul}*`, wm, 'Tebak Lirik', `.tebaklirik`, conn.tebaklagu[id][0])
            delete conn.tebaklagu[id]
        }, timeout)
    ]
    await conn.sendFile(m.chat, json.preview, 'eror.mp3', '', m, 1, { mimetype: 'audio/mp4' })
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = 1
module.exports = handler