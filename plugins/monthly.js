let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let wm = global.botwm
    let user = global.db.data.users[m.sender]
    let _timers = (2592000000 - (new Date - user.lastmonthly))
    let timers = clockString(_timers) 
    if (new Date - user.lastmonthly > 2592000000) {
    let str = `〔 𝗠𝗢𝗡𝗧𝗛𝗟𝗬 〕\n\n+100000 Money 💵\n+50 Legendary Crate 🧰\n+30 Pet Crate 📫\n+70 Iron ⛓\n+20 Gold 🪙\n+70 String 🕸\n+100 Kayu 🪵`
        conn.send2Button(m.chat, str, wm, 'Claim', '.claim', 'Weekly', '.weekly',m)
        conn.reply(str)
        user.money += 1000000
        user.legendary += 50
        user.string += 70
        user.kayu += 100
        user.iron += 70
        user.gold += 20
        user.pet += 30
        user.lastmonthly = new Date * 1
    } else {
        let buttons = button(`Silahkan Tunggu *🕒${timers}* Lagi Untuk Bisa Mengclaim Lagi`, user)
        conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, { quoted: m })
    }
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i
handler.limit = true
handler.register = true
//udah di maapin kan?
handler.fail = null
handler.level = 30
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let botol = global.botwm

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/claim'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: `${botol}`,
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}
