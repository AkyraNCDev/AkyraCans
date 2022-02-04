let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `╭─[ 𝗘𝗡𝗔𝗕𝗟𝗘 𝗔𝗙𝗞 𝗠𝗢𝗗𝗘 ]─✧
┆ Nama : ${conn.getName(m.sender)}
┆ Alasan : *${text ? '' + text : ''}*
╰┅────★
`.trim()
conn.sendButton(m.chat, str, wm, 'Oke, Jangan Lama²!!', 'iyaaaaa',m)
conn.reply(str)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm