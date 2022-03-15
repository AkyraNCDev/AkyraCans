let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `*Tidak Ada Absen Berlangsung Digrup Ini!*\n\n${usedPrefix}mulaiabsen - Untuk Memulai Absen`

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '*✔️Kamu Sudah Absen!*'
    absen.push(m.sender)
    m.reply(`Done!`)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├◪ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.send2Button(m.chat, `
📅 Tanggal: ${date}
${conn.absen[id][2]}

╭───[ 𝗟𝗜𝗦𝗧 ]
│ Total: ${absen.length}
${list}
╰───────·····──────
`,datebot + '\n' + wm, 'Absen', '.absen', 'Cek Absen', '.cekabsen', m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i
handler.group = true
module.exports = handler
handler.register = true
handler.limit = 1
let wm = global.botwm
let datebot = global.botdate