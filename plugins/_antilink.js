let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
    await conn.sendButton(m.chat, `*Link Grup Terdeteksi!*${isBotAdmin ? '' : '\n\nBukan Admin Jadi Gabisa Kick T_T'}\n\nKetik *.off antilink* Untuk Mematikan Fitur Ini${opts['restrict'] ? '' : '\nketik #on restrict supaya bisa kick'}`, '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', 'Matikan Antilink', ',0 antilink', m)
    //if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
//    }
  }
  return true
}

module.exports = handler
