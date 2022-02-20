let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
Hai Semua Member Group Disini, Perkenalkan Saya Adalah *${conn.user.name}* Bot Whatsapp Yang Dibangun Dengan Nodejs, Dan Saya Diundang Ke Group Oleh @${m.sender.split`@`[0]}

Aku Harap Kalian Nyaman Dengan Keberadaanku Di Group Ini
    
Ketik *${usedPrefix}menu* Untuk Melihat Daftar Perintah`.trim(), botwm, 'Menu', `${usedPrefix}?`, m {
contextInfo: {
mentionedJid: [m.sender]
}})
}
handler.help = ['join <chat.whatsapp.com> <expired>']
handler.tags = ['owner']
handler.command = /^join$/i

handler.owner = true

module.exports = handler
