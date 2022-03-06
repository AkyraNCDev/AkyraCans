let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `🔎 Tidak Ada Absen Berlangsung!`, wm, 'Mulai Absen', `${usedPrefix}mulaiabsen`, m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`*✔️ Absen Berhasil Dihapus*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus|-)absen$/i
handler.register = true
handler.limit = true
handler.level = 5
module.exports = handler

let wm = global.botwm