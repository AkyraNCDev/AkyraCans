let fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
┌〔 𝗣𝗜𝗟𝗜𝗛𝗔𝗡 〕
├• latinkejawa
├• latinkesunda
├• jawakelatin
├• sundakelatin
└────

Contoh Penggunaan:
${usedPrefix + command} latinkejawa selamat pagi
${usedPrefix + command} latinkesunda selamat pagi
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'latinkejawa':
        case 'latinkesunda':
        case 'jawakelatin':
        case 'sundakelatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(global.API('lolkey', '/aksara/' + args[0].toLowerCase(), { text }, 'rey2k21'))
            if (!res.ok) throw eror
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['error']
handler.command = /^ihgf$/i

handler.limit = true

module.exports = handler