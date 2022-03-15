let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (5000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].money > 10000) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 5000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let ____money = `${Math.floor(Math.random() * 101)}`.trim()
            let ___money = (____money * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __money = (___money > 60 ? ___money - kucingnya - armornya : ___money)
            let moneyy = (kucing == 0 && armor == 0 ? pickRandom(['10000', '10000', '10000']) : kucing > 0 && armor > 0 ? __money : ___money)
            let exp = (Math.floor(Math.random() * 3000) + (kuda * 70))
            let uang = `${Math.floor(Math.random() * 50000)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 8)}`.trim()
            let string = `${Math.floor(Math.random() * 30)}`.trim()
            let kayu = `${Math.floor(Math.random() * 30)}`.trim()
            let arlok = `${Math.floor(Math.random() * 1)}`.trim()
            let potion = (_potion * 10)
            let _diamond = (rubah == 0 ? pickRandom(['0', '0', '0', '1', '1', '10', '15']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 50)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 40)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['0', '1', '10', '30'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['0', '1', '10', '20'])}`
            let sampah = `${Math.floor(Math.random() * 1000)}`.trim()
            let legendary = (_legendary * 1)
            let str = `
「 GOLD ROYALE 」

Current Round Results:
${kayu == 0 ? '' : '\n🌲Kayu ' + kayu + ''}${string == 0 ? '' : '\n🕸️String ' + string + ''}${sampah}${diamond == 0 ? '' : '\n🧭Arloji ' + arlok + ''}${potion == 0 ? '' : '\n🥤Potion ' + potion + ''}${diamond == 0 ? '' : '\n💎Diamond ' + diamond + ''}${common == 0 ? '' : '\n📦Common Crate ' + common + ''}${uncommon == 0 ? '' : '\n🛍️Uncommon Crate ' + uncommon + ''}

-${moneyy * 1} Money
`.trim()
            conn.reply(m.chat, str, m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   conn.reply(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate 🎁', m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                conn.reply(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate 🧰', m)
            }
            global.db.data.users[m.sender].money -= money * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].string += string * 1
            global.db.data.users[m.sender].kayu += kayu * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].arlok += arlok * 1.
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan Istirahat dulu sekitar\n🕔 *${timers}*`, m)
        } else conn.send2Button(m.chat, 'Uang Kamu Tidak Cukup Untuk Melakukan Spin Gold Royale', `🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃`, `CLAIM`, `.claim`, `🔙Kembali`, `.simplemenu`, m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['spingold']
handler.tags = ['rpg']
handler.command = /^(spingold)$/i
handler.register = true
handler.limit = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
