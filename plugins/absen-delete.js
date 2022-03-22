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
        await conn.sendButton(m.chat, `🔎 Tidak Ada Absen Berlangsung!`, wm, '𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍', `${usedPrefix}mulaiabsen`, m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`*✔️ Absen Berhasil Dihapus*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus|-)absen$/i
handler.register = true
module.exports = handler

let wm = global.botwm