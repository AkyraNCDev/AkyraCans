let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `*Oke ${conn.getName(m.sender)}, Kamu Sekarang Away From Keyboard (AFK) Dengan Alasan ${text ? '' + text : ''}*
`.trim()
conn.sendButton(m.chat, str, wm, '𝐎𝐊𝐄, 𝐂𝐄𝐏𝐀𝐓 𝐊𝐄𝐌𝐁𝐀𝐋𝐈 𝐘𝐀', 'iyaaaaa',m)
conn.reply(str)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm