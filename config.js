// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/*function image() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = fs.readFileSync('./src/logo3.jpg')
    if (time >= 4) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time > 10) {
        res = fs.readFileSync('./src/logo3.jpg')
    }
    if (time >= 15) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    if (time >= 18) {
        res = fs.readFileSync('./src/logo2.jpg')
    }
    return res
}*/

global.DeveloperMode = 'false' //Buat Mode True False Moderator
global.linkGC = ['https://chat.whatsapp.com/FQZcB1IaelbDkEdVWF313Z'] // ganti jadi group lu
global.owner = ['6281347927862','6285163083750'] // Put your number here
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  bg: 'http://bochil.ddns.net',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'amel',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.packname = '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃\nwa.me/6285159258830\n\n\n𝙱𝚢 𝟸𝙰〽️\n\n\nFollow IG: @bot.ngcore\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.'
global.author = '۰ ⸼'

// silakan di ganti klo mau
global.botwm = `🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃`//UBAH JADI NAMAMU
global.botdate = `╭──────────═┅═─────────\n│◪ ${time}\n┊◪ ${week} ${date}\n╰──────────═┅═─────────`
global.global.imagebot = `https://telegra.ph/Rikka-02-10-3`
global.logo = fs.readFileSync('./src/logo3.jpg')
global.logoowner = fs.readFileSync('./src/owner.jpg')
global.logopartner = fs.readFileSync('./src/partner.jpg')
global.wait = let ara = fs.readFileSync('./audio/cepetan.mp3') 

conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
global.rpg = '[❗] Fitur Rpg Dimatikan\n*Ketik !enable rpg Untuk Menggunakan Fitur Ini!*\nKalo Mau Main Disini Aja\nhttps://chat.whatsapp.com/FQZcB1IaelbDkEdVWF313Z'
global.nsfw = '[❗] Fitur NSFW Dimatikan\n*Ketik !enable nsfw Untuk Menggunakan Fitur Ini!*\n\n“Katakanlah Kepada Orang Laki-laki Yang Beriman: Hendaklah Mereka Menahan Pandanganya, Dan Memelihara Kemaluannya; … Katakanlah Kepada Wanita Yang Beriman: Hendaklah Mereka Menahan Pandangannya, Dan Kemaluannya, Dan Janganlah Mereka Menampakkan Perhiasannya, Kecuali Yang (Biasa) Nampak Dari Padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '```404 ERROR```'
global.pref = '( # . ! /)'
global.CanvasAPI = '';
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=chrominium-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 16 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
