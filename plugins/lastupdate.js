// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let handler  = async (m, { conn }) => {

  conn.sendMessage(m.chat, 'imageMessage', { caption:`
❗Information Update on 12


➕ New Features
➖ Features Removed
☑️ Features Fixed



NOTE📑
Udah Segini Aja Dlu, Owner Jg Lgi Sakit Dan Doain Biar Sembuh 🐦



➕ #animal
➕ #gitclone
➕ #gitsearch
➕ #gitdl
➕ #wallpaperq
➕ #deluser
➕ #totalfitur
➕ #jumlahdatabase
➕ #tourl

➖ Blank

☑️ #yaoi
☑️ #wink
☑️ #wallpaper
☑️ #tiktok
☑️ #solo
☑️ #sideoppai
☑️ #shota
☑️ #sagiri
☑️ #shinobu
☑️ #nsfwtrap
☑️ #nsfwavatar
☑️ #lewdkemo
☑️ #hololewd
☑️ #happy
☑️ #fury
☑️ #hentai
☑️ #futanari
☑️ #foxgirl
☑️ #estetic
☑️ #elf
☑️ #elaina
☑️ #ecchi
☑️ #cringe
☑️ #cecan
☑️ #bully
☑️ #blowjob
☑️ #art
☑️ #armpits
☑️ #animebooty
☑️ #animefeets
☑️ #ahegao
☑️ #pinterest
☑️ #pinterest2
☑️ #getcode



⚠️Button Gak Respon
Jadi Ketik Manual Aja



「 February 12 」`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('./src/uwu.png'), contextInfo: { mentionedJid: [global.conn.user.jid]}})
}
handler.help = ['lastupdate']
handler.tags = ['info']
handler.command = /^(lastupdate)$/i
handler.fail = null

module.exports = handler
