let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let { performance } = require('perf_hooks')
let neww = Math.round(performance.now())
let old = Math.round(performance.now())
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `

 ▣ Nama Bot: %me
 ▣ Mode: ${global.opts['self'] ? 'Private' : 'Publik'}
 ▣ Prefix: Multi
 ▣ Speed: ${neww - old} ms
 ▣ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
 ▣ Platform: Unbuntu Linux
 ▣ Uptime: %uptime (%muptime)
 ▣ Database: %rtotalreg Dari %totalreg


%readmore`.trimStart(),
  header: '╭════[ %category ]═════···',
  body: '┢⎔ %cmd %islimit %isPremium',
  footer: '┕╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╾•',
  after: `\n        ▌│█║▌║▌║║▌║▌║█│▌█ ▌\n               %week, %date.
     %me
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let bzz = './audio/robot.m4a'
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Epic Rpg',
    'xp': 'Exp & Limit',
    'fun': 'Fun',
    'jodoh': 'Jodoh',
    'gift': 'Gift',
    'anime': 'Anime',
    'hentai': `NSFW`,
    'premium': 'Premium',
    'anonymous': 'Anonymous Chat',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'absen': 'Absen',
    'voting': 'vote',
    'admin': `Admin`,
    'group': 'Grup',
    'news': 'News',
    'internet': 'Internet',
    'edukasi': 'Edukasi',
    'quran': 'Islam',
    'image': 'Random Image',
    'sticker': 'Stiker',
    'nulis': 'MagerNulis & Logo',
    'audio': 'Pengubah Suara',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'database': 'Database',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'thnks': 'THANKS TO',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'NSFW',
    'nsfw': 'HENTAI',
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun',
    'jodoh': 'Jodoh'
  }
  if (teks == 'jodoh') tags = {
    'jodoh': 'Jodoh'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'gift') tags = {
    'gift': 'Gift'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'thnks') tags = {
    'thnks': 'THANKS TO'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let wm = global.botwm
    let logo = global.logo
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `*❦ʀᴇɴ-ʙᴏᴛ*`.trim(),
          "description": `${ucapan()}, ${name} !`.trim(),
          "footerText": `
Hai Selamat Datang, Saya Adalah ❦ʀᴇɴ-ʙᴏᴛ Salah Satu Bot Whatsapp Yang Dikembangkan Oleh Akyra. Silahkan Pilih Menu Untuk Menggunakan Bot Dan Membaca Rules Bot Ini Untuk Menjadi User Yang Bijak Dalam Menggunakan Bot.

 ◈ ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ ${uptime}
 ◈ ᴍᴜʟᴛɪ ᴘʀᴇғɪx
 ◈ ʙᴀʜᴀsᴀ ɪɴᴅ-ᴇɴɢ
 ◈ 643 ғɪᴛᴜʀ 
      
╭┄┄┄┄┄⎔ 𝗗𝗔𝗦𝗛𝗕𝗢𝗔𝗥𝗗
┣•ʙᴀᴛᴇʀᴀɪ     
┃▰▰▰▰▰▰▰▰▰▰ 100%
┣•ᴘᴇɴɢɢᴜɴᴀ 
┃▰▰▰▰▰▰▱▱▱▱ ${Object.keys(global.db.data.users).length} ᴜsᴇʀ
┣•ᴊᴀᴅɪʙᴏᴛ     
┃▱▱▱▱▱▱▱▱▱▱ ${totaljadibot.length} ᴜsᴇʀ
┣•ᴛᴇʀʙʟᴏᴄᴋ                        
┃▰▰▰▰▰▱▱▱▱▱ ${conn.blocklist.length} ᴜsᴇʀ
┣•ᴄʜᴀᴛ ᴛᴇʀʙᴀɴɴᴇᴅ
┃▱▱▱▱▱▱▱▱▱▱ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} ᴜsᴇʀ
┣•ᴘᴇɴɢɢᴜɴᴀ ᴛᴇʀʙᴀɴɴᴇᴅ
┃▰▱▱▱▱▱▱▱▱▱ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} ᴜsᴇʀ
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅⎔


𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧 𝗕𝗢𝗧
https://chat.whatsapp.com/CvzDovqBFsxEd52abw0TkD
`,
          "buttonText": "𝗠𝗘𝗡𝗨",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                	      "title": "𝗥𝗔𝗠𝗔𝗗𝗛𝗔𝗡 𝟮𝟬𝟮𝟮 ☪️",
                                         "description": "Berisi Fitur & Menu Event Khusus Ramadhan 1443H",
                                         "rowId": ".rd"
                                    }, {
                                         "title": "𝗦𝗧𝗔𝗧𝗨𝗦 📊",
                                         "description": "Memperlihatkan Status Ren Bot Saat Ini",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "𝗦𝗣𝗘𝗘𝗗 ⚡",
                                         "description": "Uji Coba Kecepatan Bot Dalam Merespon",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "𝗜𝗡𝗙𝗢 🗒️",
                                         "description": "Informasi Tentang Ren Bot",
                                         "rowId": ".info"
                                    }, {
                                         "title": "𝗖𝗥𝗘𝗔𝗧𝗢𝗥 👤",
                                         "description": "Kontak Pengembang Sekaligus Pemilik Bot Ren",
                                         "rowId": ".nowner"
                                    }, {
                                         "title": "𝗟𝗔𝗦𝗧 𝗨𝗣𝗗𝗔𝗧𝗘 ⏫",
                                         "description": "Informasi Update Bot Ren",
                                         "rowId": ".lastupdate"
                       }],
                    "title": "⎔────────────[ 𝐒𝐓𝐀𝐓𝐒 ]───────────────⎔"
                }, {
                  "rows": [{
                  "title": "𝗔𝗟𝗟 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 📚",
                  "description": "Semua Fitur Bot Ren",
                  "rowId": ".? all"
                }, {
                  "title": "𝗚𝗔𝗠𝗘 🎮",
                  "description": "Sesuatu Yang Dapat Dimainkan Dengan Aturan Tertentu Sehingga Ada Yang Menang.",
                  "rowId": ".? game"
                }, {
                  "title": "𝗥𝗢𝗟𝗘 𝗣𝗟𝗔𝗬𝗜𝗡𝗚 𝗚𝗔𝗠𝗘 ⚔️",
                  "description": "Sebuah Permainan Di Mana Pemainnya Memainkan Peran Karakter Dalam Latar Fiksi.",
                  "rowId": ".? rpg"
                }, {
                  "title": "𝗘𝗫𝗣 & 𝗟𝗜𝗠𝗜𝗧 🧬",
                  "description": "Berisi Fitur Yang Bersangkutan Dengan EXP & LIMIT",
                  "rowId": ".? xp"
                }, {
                  "title": "𝗛𝗔𝗩𝗘 𝗙𝗨𝗡 🧩",
                  "description": "Salah Satu Kegiatan Outbound Yang Mana Kegiatan Ini Adalah “Bermain” Bersama.",
                  "rowId": ".? fun"
                }, {
                  "title": "𝗚𝗜𝗙𝗧 🎁",
                  "description": "Sesuatu Yang Diberikan Kepada Orang Lain Tanpa Adanya Timbal Balik.",
                  "rowId": ".? gift"
                }, {
                  "title": "𝗡𝗢𝗧 𝗦𝗔𝗙𝗘 𝗙𝗢𝗥 𝗪𝗢𝗥𝗞 🔞",
                  "description": "Foto, Video, Atau File Yang Mungkin Tidak Ingin Dilihat Oleh Pemirsa Di Lingkungan Publik.",
                  "rowId": ".? nsfw"
                }, {
                  "title": "𝗔𝗡𝗜𝗠𝗘 ⛩️",
                  "description": "Animasi Khas Jepang Yang Biasanya Dicirikan Melalui Gambar- Gambar Berwarna-Warni.",
                  "rowId": ".? anime"
                }, {
                  "title": "𝗡𝗘𝗪𝗦 📰",
                  "description": "Laporan Tercepat Mengenai Fakta Atau Ide Terbaru Yang Benar, Menarik Atau Penting",
                  "rowId": ".? News"
                },  {
                  "title": "𝗜𝗦𝗟𝗔𝗠𝗜𝗖 🕋",
                  "description": "Tentang Islam Yang Mungkin Akan Bisa Merubah Hidupmu",
                  "rowId": ".? quran"
                }, {
                  "title": "𝗘𝗗𝗨𝗖𝗔𝗧𝗜𝗢𝗡 🏫",
                  "description": "Upaya Mengubah Sikap Dan Perilaku Seseorang Ataupun Kelompok.",
                  "rowId": ".? edukasi"
                }, {
                  "title": "𝗥𝗔𝗡𝗗𝗢𝗠 𝗜𝗠𝗔𝗚𝗘 🖼️",
                  "description": "Mendapatkan Beberapa Foto Random Sesuai Perintah Yang Tersedia",
                  "rowId": ".? image"
                },  {
                  "title": "𝗦𝗧𝗜𝗖𝗞𝗘𝗥 🎫",
                  "description": "Foto Atau Gambar Yang Dikemas Secara Menarik Dan Lucu",
                  "rowId": ".? stiker"
                }, {
                  "title": "𝗠𝗔𝗚𝗜𝗖 𝗦𝗛𝗘𝗟𝗟 🐚",
                  "description": "Mainan Yang Digunakan Untuk Menjawab Semua Pertanyaan Yang Diajukan",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "𝗤𝗨𝗢𝗧𝗘𝗦 📑",
                  "description": "Pengulangan Satu Ekspresi Sebagai Bagian Dari Yang Lain.",
                  "rowId": ".? quotes"
                }, {
                  "title": "𝗔𝗗𝗠𝗜𝗡 👑",
                  "description": "Fitur Yang Hanya Dapat Digunakan Oleh Admin Group.",
                  "rowId": ".? admin"
                }, {
                  "title": "𝗚𝗥𝗢𝗨𝗣 𝗖𝗛𝗔𝗧👥",
                  "description": "Fitur Khusus Yang Hanya Dapat Digunakan Di Group Oleh Admin & Member",
                  "rowId": ".? grup"
                }, {
                  "title": "𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🌟",
                  "description": "Fitur Berkelas Yang Hanya Premium User Yang Dapat Menggunakan-nya",
                  "rowId": ".? premium"
                }, {
                  "title": "𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 💻",
                  "description": "Mencari Sesuatu Yang Kamu Butuhkan Di Internet Lewat Bot Ini.",
                  "rowId": ".? internet"
                }, {
                  "title": "𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 🎭",
                  "description": "Terhubung Dengan Pengguna Lain Tanpa Harus Mengetahui Nama Akun Dan Asal Usulnya.",
                  "rowId": ".? anonymous"
                }, {
                  "title": "𝗪𝗥𝗜𝗧𝗘 & 𝗖𝗥𝗘𝗔𝗧𝗘 𝗟𝗢𝗚𝗢 ✍️",
                  "description": "Menulis & Membuat Logo Menggunakan Fitur Yang Tersedia Di Bot Ren.",
                  "rowId": ".? nulis"
                }, {
                  "title": "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📥",
                  "description": "Menerima Data Dari Sistem Jarak Jauh, Biasanya Server Seperti Server Web, Server FTP.",
                  "rowId": ".? downloader"
                }, {
                  "title": "𝗧𝗢𝗢𝗟𝗦 🧰",
                  "description": "Tools Menjadi Fitur Penting Yang Bisa Membantu Pekerjaan.",
                  "rowId": ".? tools"
                }, {
                  "title": "𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 📂",
                  "description": "Data Yang Terorganisir, Yang Umumnya Disimpan Dan Diakses Secara Elektronik Dari Bot Ren",
                  "rowId": ".? database"
                }, {
                  "title": "𝗩𝗢𝗧𝗘 & 𝗥𝗢𝗟𝗟 𝗖𝗔𝗟𝗟 🗳️",
                  "description": "Pemungutan Suara Dan Absen",
                  "rowId": ".? vote"
                }, {
                  "title": "𝗩𝗢𝗜𝗖𝗘 𝗖𝗛𝗔𝗡𝗚𝗘𝗥 🎙️",
                  "description": "Alat Untuk Merubah SuaRa Kita Di Telepon Atau Handphone.",
                  "rowId": ".? audio"
                }, {
                  "title": "𝗝𝗔𝗗𝗜 𝗕𝗢𝗧 🤖",
                  "description": "Menjadi Bot Ren Untuk Sementara Maupun Permanen",
                  "rowId": ".? jadibot"
                }, {
                  "title": "𝗜𝗡𝗙𝗢 ℹ️",
                  "description": "Kumpulan Pesan Yang Terdiri Dari Order Sekuens Dari Simbol",
                  "rowId": ".? info"
                }, {
                  "title": "𝗡𝗢 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬❓",
                  "description": "Fitur Yang Tidak Mempunyai Kategori",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "𝗢𝗪𝗡𝗘𝗥 🧑‍💻",
                  "description": "Khusus Owner Bot Ren Yang Bisa Menggunakan",
                  "rowId": ".? owner"
                }],
                                "title": "⎔────────────[ 𝗠𝗘𝗡𝗨 ]───────────────⎔"
                                }, {
                                "rows": [{
                                "title": "𝗗𝗢𝗡𝗔𝗦𝗜 💰",
                                "description": "Pemberian Pada Umumnya Bersifat Secara Fisik Oleh Perorangan Atau Badan Hukum, Pemberian Ini Mempunyai Sifat Sukarela Dengan Tanpa Adanya Imbalan Bersifat Keuntungan Kepada Orang Lain",
                                "rowId": ".donasi"
                                }, {
                                "title": "𝗦𝗘𝗪𝗔 🔖",
                                "description": "List Harga Pembelian Sewa Untuk Group Chat",
                                "rowId": ".sewa"
                                }, {
                                "title": "𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ⭐",
                                "description": "List Harga Pembelian Premium",
                                "rowId": ".premium"
                                }, {
                                "title": "𝗦𝗢𝗨𝗥𝗖𝗘 𝗖𝗢𝗗𝗘 💻",
                                "description": "SC Bot Ren",
                                "rowId": ".sc"
                                }, {
                                "title": "𝗧𝗛𝗔𝗡𝗞-𝗬𝗢𝗨 𝗡𝗢𝗧𝗘 🎖️",
                                "description": "Terima Kasih Telah Membantu Bot Ini Untuk Berkembang",
                                "rowId": ".? thnks"
                                }],
                                "title": "⎔─────────────[ Info ]────────────────⎔"
                            }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                    }
                 }, {}), {waitForAck: true})
  
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    // await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), '🎮 Ƙαɴɴα вσт', 'Owner', '.owner', 'Donasi', '.donasi', 'Rules', '.infobot', m)
    await conn.send3ButtonLoc(m.chat, logo, '❦ʀᴇɴ-ʙᴏᴛ', text.trim(), '☉ 𝐎𝐖𝐍𝐄𝐑 ☉', '.nowner', '☉ 𝐃𝐎𝐍𝐀𝐒𝐈 ☉', '.donasi', '☉ 𝐑𝐔𝐋𝐄𝐒 ☉', '.rules', m)
    let nama = await conn.getName(m.sender)
    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}


  logo2 = global.logo
  kanna = fs.readFileSync('./src/logo4.jpg')
  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()
  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  /*res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": '✧───────···[ Menu ]···────────✧',
        "description": `\n${wm}\n` + text,
        "retailerId": `${week}, ${date}  |  ʙʏ ʟᴇᴛᴛᴀ-sᴀᴍᴀ ‷♪`,
        "url": '\n',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "0@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi 🌄"
  }
  if (time > 10) {
    res = "Selamat siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat malam 🌙"
  }
  return res
}