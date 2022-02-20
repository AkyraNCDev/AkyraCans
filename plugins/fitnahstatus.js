let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  if (!text) return
  let cm = copy(m)
  let who
  if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Contoh\n\n#fitnahstatus Hai @user Juga'
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), 'status@broadcast'/*, { contextInfo: {
    mentionedJid: [conn.parseMention(real.join(sp))]
  }}*/)
}
handler.command = /^(fitnahstatus)$/
handler.help = ['fitnahstatus'].map(v => v + ' <text @user text>')
handler.tags = ['fun']
module.exports = handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
