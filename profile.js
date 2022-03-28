let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `

⎔─────[ PROFILE ]──────⎔

 ▣ Name: ${username} ${registered ? '(' + name + ') ': ''}
 ▣ Tag: @${who.replace(/@.+/, '')}
 ▣ Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
 ▣ Link: https://wa.me/${who.split`@`[0]}
${registered ? ' ▣ Age: ' + age : ''}
${about ? ' ▣ About: ' + about : ''}

 ▣ Premium: ${premium ? "✅" :"❌"}
 ▣ Registered: ${registered ? '✅': '❌'}
 ▣ Banned: ❌

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|profil$/i
module.exports = handler