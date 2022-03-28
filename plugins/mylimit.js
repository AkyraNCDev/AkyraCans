let PhoneNumber = require('awesome-phonenumber')
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let botol = global.botwm
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
*Limit ${username} Tersisa ${limit}🎟️*\n\nBeli Limit Dengan Cara\n#blimit <nominal>\n • Contoh\n    #blimit 10
`.trim()
    let mentionedJid = [who]
    conn.fakeReply(m.chat, str, '0@s.whatsapp.net', `❦ʀᴇɴ-ʙᴏᴛ\nIts Me Akyra`, 'status@broadcast')
    conn.reply[str]
  }
}
handler.help = ['limit']
handler.tags = ['xp']
handler.register = true
handler.command = /^limit$/i
module.exports = handler