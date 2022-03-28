const fetch = require('node-fetch')
let timeout = 120000
let poin = 5000
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, '*Mohon Selesaikan Dulu Sesi Ini Untuk Melanjutkan Ke Sesi Berikutnya*', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
「 𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞 」

Pertanyaan
${json.soal}

⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
🔎Ketik ${usedPrefix}ao Untuk Bantuan
🎁Prize: ${poin} XP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendButton(m.chat, caption, '❦ʀᴇɴ-ʙᴏᴛ', 'Bantuan', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendButton(m.chat, `Waktu Untuk Menjawab Habis!\nJawabannya Adalah *${json.jawaban}*`, '❦ʀᴇɴ-ʙᴏᴛ', '𝐌𝐀𝐈𝐍 𝐋𝐀𝐆𝐈🔂', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.register = true
let wm = global.botwm
module.exports = handler
