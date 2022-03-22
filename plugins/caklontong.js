let fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Selesaikan Dulu Soal Ini Kak', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
「 𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚 」

Pertanyaan
${json.soal}

⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
❔Ketik ${usedPrefix}calo Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.caklontong[id] = [
        await conn.sendButton(m.chat, caption, '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', 'Bantuan', '.calo', m),
        json, poin,
        setTimeout(async () => {
            if (conn.caklontong[id]) await conn.sendButton(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', '𝐂𝐀𝐊 𝐋𝐎𝐍𝐓𝐎𝐍𝐆', '.caklontong')
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.register = true
module.exports = handler