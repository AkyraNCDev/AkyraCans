let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
╭─────[ RULES ]─────✧
┴
│¹ Dilarang Hina Bot / Owner
│² Dilarabg Spam Command
│³ Dilarang Kirim Virtex
│⁴ Dilarang Spam Menu Ga Jelas
│⁵ Dilarang Telp / Vc
│⁶ Dilarang Culik Bot
│⁷ Dilarang Promosi
│⁸ Dilarang Meniru Pesan Bot
│⁹ Bot Tidak Menerima Save Kontak
│¹⁰ Dilarang Chat Owner Ga Jelas
│¹¹ No Plagiat
┬
╰──────────···

╭─────[ HUKUM ]─────✧
┴
│ 1 & 11 = Block + Banned Permanent
│ 2,4,6 & 8 = Banned Sementara
│ 3 = War
│ 5 = Block Sementara
│ 9 & 10 = Block Permanent
┬
╰──────────···
${wm}
`.trim(), 'Harap patuhin peraturan tersebut', '⋮☰ Menu', '.menu', 'Owner', '.nowner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler

let wm = global.botwm