let fetch = require('node-fetch')

let timeout = 120000
let poin = 4999
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '〔 𝗔𝗟𝗘𝗥𝗧 〕\n\nMasih Ada Soal Belum Terjawab Di Chat Ini', conn.tebakbendera[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakbendera.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
「 𝗧𝗘𝗕𝗔𝗞 𝗕𝗘𝗡𝗗𝗘𝗥𝗔 」\n
⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
❗Ketik ${usedPrefix}benderaapa Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.name}*`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i

module.exports = handler