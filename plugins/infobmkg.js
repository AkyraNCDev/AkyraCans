let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

  await m.reply(global.wait)

    let res = await (await fetch(`https://st4rz.herokuapp.com/api/infogempa`)).json()
        let str = `「 𝗜𝗡𝗙𝗢 𝗚𝗘𝗠𝗣𝗔 」\n\n🚩Lokasi : ${res.lokasi}\n📏Kedalaman : ${res.kedalaman}\n📍Koordinat : ${res.koordinat}\n📳Magnitude : ${res.magnitude}\n🌊Potensi : ${res.potensi}\n⌚Waktu : ${res.waktu}`

    conn.sendButtonLoc(m.chat, await (await fetch(res.map)).buffer(), str, '🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃', 'News', '#? news', m)
}
handler.help = ['infobmkg','infogempa']
handler.tags = ['news']
handler.command = /^(infobmkg|infogempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
