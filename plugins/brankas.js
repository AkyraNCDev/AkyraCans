let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Dompet'
  let botol = global.botwm
  let fetch = require('node-fetch')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { atm, name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let wm = global.botwm
    let str = `
╭────「 𝗩𝗔𝗨𝗟𝗧 」
┟  ╖• Name : ${username}
╽⌑╟• Nomor : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
╽⌑╟• Premium : ${premium ? "Yes" :"No"}
╽⌑╟• Age : ${registered ? '' + age : ''}
╽⌑╟• Role : ${role}
╽⌑╟• Limit : ${limit}
╽⌑╟• ️Limit Game : ${tigame}
╽⌑╟• Money : ${money}
╽⌑╟• Bank : ${atm}
╽⌑╟• Level : ${level}
┟⌑╟• Exp : ${exp}
╰  ╨╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`.trim()
    let mentionedJid = [who]
    conn.sendButton(m.chat, str, `${wm}`, '𝐈𝐍𝐕𝐄𝐍𝐓𝐎𝐑𝐘', '.inv', m)
    conn.reply(str)
  }
}
handler.help = ['my','dompet']
handler.tags = ['xp']
handler.register = true
handler.command = /^my|dompet$/i
module.exports = handler