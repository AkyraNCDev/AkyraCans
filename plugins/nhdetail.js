let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command}) => {
    if (!args[0]) throw `Masukkan kode, berikut: ${usedPrefix + command} 304307`
    let res = await fetch(global.API('lol', `/api/nhentai/${args[0]}`, {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let ayaka = `
「 DOUJINSHI DETAIL 」

💭Title: ${json.result.title_romanji}
💬Title (Native): ${json.result.title_native}
🎬Parodies: ${json.result.info.parodies}
📍Characters: ${json.result.info.characters}
🖲️Genres: ${json.result.info.tags}
♀️Artists: ${json.result.info.artists}
👥Groups: ${json.result.info.groups}
📹Categories: ${json.result.info.categories}
📃Pages: ${json.result.info.pages}
📅Uploaded: ${json.result.info.uploaded}


⚠️Button Tidak Work Untuk Pesan Sementara/Wa Mod Silahkan Pakai ${usedPrefix}nhd ${args[0]}
`.trim()
    conn.sendButtonImg(m.chat, await (await fetch(json.result.image[0])).buffer(), ayaka, 'Download', `.nhd ${args[0]}`, m)
}
handler.command = /^nh$/i
handler.tags = ['nsfw']
handler.help = ['nh <code>']
handler.nsfw = false
handler.register = true
handler.limit = 3
module.exports = handler