let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lol', '/api/nhentaisearch', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*🔢Kode:* ${v.id}\n*🇬🇧Title English:* ${v.title_english}\n*🇯🇵Title Japanese:* ${v.title_japanese}\n*💬Title:* ${v.title_native}\n*📅Date:* ${v.date_upload}\n*📃Page:* ${v.page}\n*⭐Favourite:* ${v.favourite}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['nhsearch <query>']
handler.tags = ['nsfw']
handler.nsfw = false
handler.register = true
handler.limit = 6
handler.command = /^(nhs|nhsearch)$/i

module.exports = handler