let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text }) => {
let date = global.botdate
    let { registered, age, lastrampok, lastdagang, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]

    let healt = global.db.data.users[m.sender].healt
    let usrname = global.db.data.users[m.sender].name
    let stamina = global.db.data.users[m.sender].stamina
    let armor = global.db.data.users[m.sender].armor 
    let sword = global.db.data.users[m.sender].sword
    let sdurability = global.db.data.users[m.sender].sworddurability
    let warn = global.db.data.users[m.sender].warn
    let premium = global.db.data.users[m.sender].premium
    let tprem = global.db.data.users[m.sender].tprem
    let pancing = global.db.data.users[m.sender].pancing
    let fdurability = global.db.data.users[m.sender].fishingroddurability
    let role = global.db.data.users[m.sender].role
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability

    let psepick = global.db.data.users[m.sender].psepick
    let psenjata = global.db.data.users[m.sender].psenjata

    let ikan= global.db.data.users[m.sender].ikan
    let nila= global.db.data.users[m.sender].nila
    let bawal= global.db.data.users[m.sender].bawal
    let lele= global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang

    let apel = global.db.data.users[m.sender].apel
    let ayamg = global.db.data.users[m.sender].ayamg
    let ayamb = global.db.data.users[m.sender].ayamb
    let sapir = global.db.data.users[m.sender].sapir
    let ssapi = global.db.data.users[m.sender].ssapi
    let kurmatoken = global.db.data.users[m.sender].kurmatoken
    let cameltoken = global.db.data.users[m.sender].cameltoken
    let emas = global.db.data.users[m.sender].emas
    let besi = global.db.data.users[m.sender].iron
    let batu = global.db.data.users[m.sender].batu
    let sapi = global.db.data.users[m.sender].sapi
    let ayam = global.db.data.users[m.sender].ayam
    let babi = global.db.data.users[m.sender].babi
    let banteng = global.db.data.users[m.sender].banteng
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga                                         
    let makananphonix = global.db.data.users[m.sender].makananphonix                                     
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi                                       
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let atm = global.db.data.users[m.sender].atm
    let aqua = global.db.data.users[m.sender].aqua
    let pasangan = global.db.data.users[m.sender].pasangan
    let ramuan = global.db.data.users[m.sender].ramuan
    let kaleng = global.db.data.users[m.sender].kaleng                    
    let kardus = global.db.data.users[m.sender].kardus
    let botol = global.db.data.users[m.sender].botol
    let arlok = global.db.data.users[m.sender].arlok
    let Limit + Legendary 100 = global.db.data.users[m.sender].Limit + Legendary 100
    let gLimit + Legendary 100 = global.db.data.users[m.sender].gLimit + Legendary 100
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let mangga = global.db.data.users[m.sender].mangga                                      
    let pisang = global.db.data.users[m.sender].pisang                                      
    let bibitanggur = global.db.data.users[m.sender].bibitanggur                            
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk                              
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga                            
    let bibitpisang = global.db.data.users[m.sender].bibitpisang
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedarlok = Object.entries(global.db.data.users).sort((a, b) => b[1].arlok - a[1].arlok)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sortedexp = Object.entries(global.db.data.users).sort((a, b) => b[1].exp - a[1].exp)
    let sortedLimit + Legendary 100 = Object.entries(global.db.data.users).sort((a, b) => b[1].Limit + Legendary 100 - a[1].Limit + Legendary 100)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersarlok = sortedarlok.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let usersexp = sortedexp.map(v => v[0])
    let usersLimit + Legendary 100 = sortedLimit + Legendary 100.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    
    let kambing = global.db.data.users[m.sender].kambing
    let kerbau = global.db.data.users[m.sender].kerbau
    let harimau = global.db.data.users[m.sender].harimau
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let panda = global.db.data.users[m.sender].panda
    let gajah = global.db.data.users[m.sender].gajah
    let buaya = global.db.data.users[m.sender].buaya
    
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let orca = global.db.data.users[m.sender].orca
    
    let number = `${PhoneNumber('+' + pasangan.replace('@s.whatsapp.net', '')).getNumber('international')}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : pasangan
    let num2 = conn.getName(pasangan)
    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
🚫EVENT 5 BELUM DIMULAI🚫
Dimulai 2 April ⏳

𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗

*Kuasai Sebanyak Banyaknya Top 1 Untuk Mendapatkan Hadiah Sesuai Ketentuan Dibawah Ini*

13 Top 1 - 3M + 30Rb Limit + Legendary 3000
12 Top 1 - 2M + 20Rb Limit + Legendary 2000
11 Top 1 - 1M + 10Rb Limit + Legendary 1000
10 Top 1 - 1M + 10Rb Limit + Legendary 1000
09 Top 1 - 900Jt + 9Rb Limit + Legendary 900
08 Top 1 - 800Jt + 8Rb Limit + Legendary 800
07 Top 1 - 700Jt + 7Rb Limit + Legendary 700
06 Top 1 - 600Jt + 6Rb Limit + Legendary 600
05 Top 1 - 500Jt + 5Rb Limit + Legendary 500
04 Top 1 - 400Jt + 4Rb Limit + Legendary 400
03 Top 1 - 300Jt + 3Rb Limit + Legendary 300
02 Top 1 - 200Jt + 2Rb Limit + Legendary 200
01 Top 1 - 100Jt + 1Rb Limit + Legendary 100

Untuk Leaderboard
• Level
• Exp
• Money
• Gold
• Diamond
• Arloji
• Potion
• Common
• Uncommon
• Mythic
• Legendary
• Sampah

Top Leaderboard Dibekukan 23:59 2 Mei

Bonus Untuk Minus Money
*Kuasai Minimal 2 Top Leaderboard Untuk Mendapatkan Uang Sesuai Utang Kamu*


╭─────❒Your Token
├ ${cameltoken} Camel Token🐪
├ ${kurmatoken} Kurma Token🕊️
└───────────────>


📆Periode Event 2 April - 2 Mei
`.trim()
    mentionedJid: [number]
    conn.send2Button(m.chat, str, wm, `Daily Login`, `.dailylogin`, `⋮☰ Event`, `.revent`, m)
    conn.reply(str)
}
handler.help = ['event5']
handler.tags = ['rpg']
handler.command = /^event5$/i
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

let wm = global.botwm