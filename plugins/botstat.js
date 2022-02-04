let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let wm = global.botwm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
╭─────[ 𝗦𝗧𝗔𝗧𝗨𝗦 ]────
├❖ Aktif selama ${uptime}
├❖ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
├❖ ${groups.length} Grup
├❖ ${chats.length - groups.length} Chat Pribadi
├❖ ${Object.keys(global.db.data.users).length} Pengguna
├❖ ${totaljadibot.length} Jadibot
├❖ ${conn.blocklist.length} Terblock
├❖ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
├❖ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
╰────────────···

╭───[ 𝗣𝗘𝗥𝗔𝗧𝗨𝗥𝗔𝗡 ]───
├ ${anon ? '✅' : '❌'} Anon Chat
├ ${anticall ? '✅' : '❌'} Anti Call
├ ${antispam ? '✅' : '❌'} Anti Spam
├ ${antitroli ? '✅' : '❌'} Anti Troli
├ ${backup ? '✅' : '❌'} Auto Backup DB
├ ${groupOnly ? '✅' : '❌'} Mode Grup
├ ${jadibot ? '✅' : '❌'} Jadi Bot
├ ${nsfw ? '✅' : '❌'} Mode Nsfw
╰────────────···
    `.trim()
conn.send2Button(m.chat, str, wm, 'Info', '.info', 'Owner', '.owner',m)
conn.reply(str)
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i
handler.register = true

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}