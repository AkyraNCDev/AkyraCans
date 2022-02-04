let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭╼╼╼╼╼𝗦𝗘𝗪𝗔 & 𝗣𝗥𝗘𝗠𝗜𝗨𝗠
╿┊ ❍ 5k/Grup • 1 Minggu
╿┊ ❍ 15k/Grup • 1 Bulan
╿┊ ❍ 20k/Grup • 2 Bulan
╿┊ ❍ 35k/Group • 8 Bulan                                                  
╿┊ ❍ 45k/Group • 12 Bulan
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼•

╭╼╼╼╼╼𝗣𝗥𝗘𝗠𝗜𝗨𝗠
╿┊ ❍ 4k • 1 Minggu
╿┊ ❍ 10k • 1 Bulan
╿┊ ❍ 25k • 3 Bulan
╿┊ ❍ 45k • Permanent
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼•

╭╼╼╼╼╼𝟮 𝗜𝗻 𝟭
╿┊ ❍ 7k • Prem + Sewa 1 Minggu
╿┊ ❍ 23k • Prem + Sewa 1 Bulan
╿┊ ❍ 45k • Prem + Sewa  3 Bulan
╿┊ ❍ 60k • Permanent All
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼•

🎁Keuntungan Sewa

⋄ Masuk Ke Group Kamu
⋄ Menggunakan Fitur Group
⋄ Seperti Antilink, Tagall, Absen
⋄ Main RPG

🎁 Keuntungan Premium
⋄ Dapat Menggunakan Fitur Premium
⋄ Limit Yang Banyak/Unlimited

[❗] Jika Group Sepi 3 Hari, Bot Akan Leave

Jika Berminat
Silahkan Hubungi Owner

My Official Bot Group
https://chat.whatsapp.com/FQZcB1IaelbDkEdVWF313Z

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, 'Payment', '#payment', 'Owner', '#Nowner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^sewa(bot)?$/i

module.exports = handler

let wm = global.botwm