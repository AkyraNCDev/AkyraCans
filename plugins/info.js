let fs = require ('fs')
let path = require('path')
let util = require('util')
let os = require('os')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
  let format = sizeFormatter({
      std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
      decimalPlaces: 2,
      keepTrailingZeroes: false,
      render: (literal, symbol) => `${literal} ${symbol}B`,
      })
let pref = global.pref

let handler  = async (m, { conn, usedPrefix }) => { 
  const cpus = os.cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
     last.total += cpu.total
     last.speed += cpu.speed / length
     last.times.user += cpu.times.user
     last.times.nice += cpu.times.nice
     last.times.sys += cpu.times.sys
     last.times.idle += cpu.times.idle
     last.times.irq += cpu.times.irq
     return last
}, {
    speed: 0,
    total: 0,
    times: {
    user: 0,
    nice: 0,
    sys: 0,
    idle: 0,
    irq: 0
   }
})
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('*[ ❗ ] Loading...*')
  let neww = Math.round(performance.now())
  let str = `
╓┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◷
║ 𝗕𝗢𝗧 𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗖
║               
╟◈Owner: wa.me/6281347927862
╟◈Moderator: wa.me/6285163083750
╟◈Mode: ${global.opts['self'] ? 'Private' : 'Publik'}
╟◈Versi: ${package.version}
╟◈Platform: Unbuntu Linux
╟◈Lib: Baileys
╟◈Type: NodeJs
╟◈Server: ${os.hostname()}
╟◈Browser: ${conn.browserDescription[1]}
╟◈Hostname: ${conn.browserDescription[0]}
╟◈Report: wa.me/6281347927862
╟◈Prefix: (# / ! .)
╟◈Speed: ${neww - old} MS
╟◈Total User: ${totalreg} User
╟◈Uptime: ${uptime}
╙┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╖
╓┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╜
┋𝗣𝗛𝗢𝗡𝗘 𝗦𝗧𝗔𝗧𝗜𝗦𝗧𝗜𝗖
┋
┋◷ WhatsApp V: ${conn.user.phone.wa_version}
┋◷ Ram: ${format(os.totalmem() - os.freemem())} / ${format(os.totalmem())}
┋◷ MCC: ${conn.user.phone.mcc}
┋◷ MNC: ${conn.user.phone.mnc}
┋◷ OS Version: ${os.platform()} ${conn.user.phone.os_version}
┋◷ Merk Hp: ${conn.user.phone.device_manufacturer}
┋◷ Versi Hp: ${conn.user.phone.device_model}
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◷




`.trim()
conn.sendButton(m.chat, str, `${botol}`, 'GROUP BOT', '.gcbot', m)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = /^(info)$/i
handler.limit = true
handler.register = true
handler.fail = null

module.exports = handler
let botol = global.botwm


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}