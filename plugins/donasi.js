let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `››╭─〘 *Donasi* 〙
╭╡
│┝✧ Pulsa: 6285712420674
│┝✧ Dana: 6285712420674
│┝✧ Linkaja:  6285712420674
│┝✧ Gopay: 6285712420674
│┝✧ Ovo: 6285712420674
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat
│wa.me/6281347927862?text=Demi+Allah,+Saya+Mau+Donasi+Ke+Abang
╰──────────···───╮
▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `${wm}`, '𝐎𝐖𝐍𝐄𝐑', '.owner')

module.exports = handler

let wm = global.botwm