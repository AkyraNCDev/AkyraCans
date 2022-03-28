let handler = m => m
handler.before = m => {
  let user = global.db.data.users[m.sender]
  if (user.afk > -1) {
    let test = `
*👋WELCOME BACK*\n\n*Kamu Berhenti Away From Keyboard (AFK) Selama ${clockString(new Date - user.afk)} Dengan Alasan ${user.afkReason ? '' + user.afkReason : ''}*
`.trim()
conn.sendButton(m.chat, test, wm, '⋮☰ 𝐌𝐄𝐍𝐔', '.menu', m)
conn.reply(test)
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    let str = `*Orang Yang Kamu Tag/Reply Sedang Away From Keyboard (AFK) Dengan Alasan ${reason ? 'Alasan : ' + reason : 'Tanpa Alasan'} Selama ${clockString(new Date - afkTime)}*
`.trim()
conn.sendButton(m.chat, str, `${wm}`,'𝐌𝐀𝐀𝐅, 𝐀𝐊𝐔 𝐓𝐈𝐃𝐀𝐊 𝐓𝐀𝐔', 'okeh',m)
conn.reply(str)
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let wm = global.botwm