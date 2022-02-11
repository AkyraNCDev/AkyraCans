let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Lamongan`
    let res = await fetch(`https://api.lolhuman.xyz/api/kodepos?apikey=rey2k21&query={ text },`)
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
    m.reply(mes)
}
handler.help = ['kodepos <kota>']
handler.tags = ['sksksj']
handler.command = /^kaksk$/i

handler.limit = true

module.exports = handler
