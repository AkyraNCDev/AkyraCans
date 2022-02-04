let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.DATABASE.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })  
let sorteduncommon = users.map(toNumber('uncommon')).sort(sort('uncommon'))
let usersuncommon = sorteduncommon.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sorteduncommon.length)
  let text = `
🏆 𝗧𝗼𝗽 𝗨𝗻𝗰𝗼𝗺𝗺𝗼𝗻  🏆
Kamu Top ${usersuncommon.indexOf(m.sender) + 1} Dari ${usersuncommon.length} User!!!

${sorteduncommon.slice(0, len).map(({ jid, uncommon }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : ''}${jid.split`@`[0]}\nUncommon ${uncommon} 🔹`).join`\n\n`}

`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersuncommon.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
handler.help = ['topuncommon']
handler.tags = ['xp']
handler.command = /^(topuncommon)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}