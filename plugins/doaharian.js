let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(global.wait)
  let res = await fetch('https://islamic-api-zhirrr.vercel.app/api/doaharian')
  let son = await res.json()
  shyi = son.data
  let json = shyi[Math.floor(Math.random() * shyi.length)]
  let caption = `
◈────────[ 𝗗𝗢𝗔 𝗛𝗔𝗥𝗜𝗔𝗡 ]────────◈

Title : ${json.title}
Arabic : ${json.arabic}
Latin : ${json.latin}

Artinya:
"${json.translation}"
`.trim()
  await conn.sendButton(m.chat, caption, '', 'Next Doa Harian⏭️', `${usedPrefix + command}`, m)
}
handler.help = ['doaharian']
handler.tags = ['quran']
handler.command = /^(doaharian)$/i
handler.register = true
handler.limit = true

module.exports = handler
