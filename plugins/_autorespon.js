let fs = require('fs')
let fetch = require('node-fetch')
let wm = global.botwm
let logo = global.logo
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = db.data.settings[this.user.jid]
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]

    // ketika ditag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? '*Mohon Maaf GC Ini Telah Dibanned*' : banned ? 'kamu dibanned' : '*❦ʀᴇɴ-ʙᴏᴛ Online*\nMohon Untuk Tidak Spam',
                '',
                isBanned ? 'Unban' : banned ? '𝐎𝐖𝐍𝐄𝐑' : '⋮☰ 𝐌𝐄𝐍𝐔',
                isBanned ? '.unban' : banned ? '.owner' : '.menu',
                m.isGroup ? 'Owner' : isBanned ? '𝐃𝐎𝐍𝐀𝐒𝐈' : 'Donasi',
                m.isGroup ? '.nowner' : isBanned ? '.donasi' : '.donasi', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.send2ButtonLoc(m.chat, logo, `
╭━━〔 LIST SEWA 〕━✧
│⬦ 1 Minggu :     Rp 5000
│⬦ 1 Bulan :        Rp 15000
│⬦ 2 Bulan :        Rp 20000
│⬦ 8 Bulan :        Rp 35000
│⬦ 12 Bulan :      Rp 45000
┝━━〔PAYMENT〕━✧
│⬦ Pulsa
╰━━━✧\n
Note: Syarat Dan Ketentuan Mungkin Berlaku`.trim(), wm, '𝐏𝐀𝐘𝐌𝐄𝐍𝐓', '#payment', '𝐎𝐖𝐍𝐄𝐑', '#nowner', m)
}

    // salam
    let reg = /(wosbhsidoeowoos)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Sama-sama, , （ ・∀・）`)
    }
let ttt = /ass?alam/i
    let tty = ttt.exec(m.text)
    if (tty && !m.fromMe) {       
        let event = `*Waalikumsalam:)*`
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.db.data.users).length
        conn.fakeReply(m.chat, event, '0@s.whatsapp.net', `❦ʀᴇɴ-ʙᴏᴛ\nIts Me Akyra`, 'status@broadcast')
}
let eee = /sepi/i
    let eer = eee.exec(m.text)
    if (eer && !m.fromMe) {       
        let event = `*coba lu rusuh pasti rame*`
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.db.data.users).length
        conn.fakeReply(m.chat, event, '0@s.whatsapp.net', `❦ʀᴇɴ-ʙᴏᴛ\nIts Me Akyra`, 'status@broadcast')
}
// tes
    let fak = /ren/i
    let isF = fak.exec(m.text)
    if (isF && !m.fromMe) {       
        let event = `HAI KAK ${conn.getName(m.sender)} , KETIK #menu UNTUK MEMULAI BOT REN`
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.db.data.users).length
        conn.fakeReply(m.chat, event, '0@s.whatsapp.net', `❦ʀᴇɴ-ʙᴏᴛ\nIts Me Akyra`, 'status@broadcast')
}
    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 20 * 20) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        await this.setStatus(`𝐑𝐞𝐧 𝐁𝐨𝐭 𝐓𝐞𝐥𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐦𝐚 ${uptime} 𝐃𝐞𝐧𝐠𝐚𝐧 𝐏𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐁𝐨𝐭 𝐒𝐞𝐛𝐚𝐧𝐲𝐚𝐤 ${Object.keys(global.db.data.users).length} 𝐔𝐬𝐞𝐫 𝐃𝐚𝐧 𝐁𝐨𝐭 𝐃𝐚𝐥𝐚𝐦 𝐌𝐨𝐝𝐞 ${global.opts['self'] ? '𝐏𝐫𝐢𝐯𝐚𝐭𝐞' : setting.groupOnly ? '𝐆𝐫𝐨𝐮𝐩 𝐎𝐧𝐥𝐲' : '𝐏𝐮𝐛𝐥𝐢𝐜'}`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}