let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `「 𝗘𝗡𝗗 𝗢𝗙 𝗥𝗘𝗡𝗧 」\n\n⌛ Waktunya ${this.user.name} Untuk Meninggalkan Grup\n⋆ *Jangan Lupa Sewa Lagi Ya!*`, null).then(() => {
                this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler