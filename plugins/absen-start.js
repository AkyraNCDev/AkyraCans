let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `[❗] Masih Ada Absen Di Chat Ini!`, wm, '𝐀𝐁𝐒𝐄𝐍', `${usedPrefix}hapusabsen`, '𝐂𝐄𝐊', `${usedPrefix}cekabsen`, m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `[❗] Absen Dimulai`, wm, 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i

module.exports = handler

let wm = global.botwm