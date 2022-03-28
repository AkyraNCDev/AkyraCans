let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.db.data.users[m.sender].banteng
  let harimau = global.db.data.users[m.sender].harimau
 let gajah = global.db.data.users[m.sender].gajah
let kambing = global.db.data.users[m.sender].kambing
let panda = global.db.data.users[m.sender].panda
 let buaya = global.db.data.users[m.sender].buaya
 let kerbau = global.db.data.users[m.sender].kerbau
let sapi = global.db.data.users[m.sender].sapi
 let monyet = global.db.data.users[m.sender].monyet
 let babihutan = global.db.data.users[m.sender].babihutan
 let babi = global.db.data.users[m.sender].babi
 let ayam = global.db.data.users[m.sender].ayam

let zer = `
—「 KANDANG 🐾 」—
    
 ⎔ [ ${banteng} ] Ekor Banteng🐂
 ⎔ [ ${harimau} ] Ekor Harimau🐅
 ⎔ [ ${gajah} ] Ekor Gajah🐘
 ⎔ [ ${kambing} ] Ekor Kambing🐐
 ⎔ [ ${panda} ] Ekor Panda🐼
 ⎔ [ ${buaya} ] Ekor Buaya🐊
 ⎔ [ ${kerbau} ] Ekor Kerbau🐃
 ⎔ [ ${sapi} ] Ekor Sapi🐮
 ⎔ [ ${monyet} ] Ekor Monyet🐒
 ⎔ [ ${babihutan} ] Ekor Babi Hutan🐗
 ⎔ [ ${babi} ] Ekor Babi🐖
 ⎔ [ ${ayam} ] Ekor Ayam🐓
 `.trim()
 conn.sendButton(m.chat, zer,wm, '𝐏𝐀𝐒𝐀𝐑 𝐇𝐄𝐖𝐀𝐍', '.pasar', m)
} 
handler.help = ['kandang']
handler.command= /^(kandang)$/i
handler.register = true
let wm = global.botwm

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)