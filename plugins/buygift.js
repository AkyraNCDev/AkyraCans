let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Gift')).buffer(), `╭─「 *BUY GIFT CODE* 」                                       │
┝⊰◈ 🛒 Harga :
│• 5K / Minggu (7 Hari)
│• 15K / Bulan (4 Minggu)
│• 25K / VIP (Permanen)
│• +5k (Costum CodeGift)
│
┝⊰◉ 💳 Pembayaran :
│• Pulsa (Telkomsel) :
│+6282253479547
╰──·····──┦

ℹ️ Keterangan
Fitur Gift Adalah Fitur Kode Yang Berisi  Hadiah! Anda Bisa Mendapatkan Exp & Limit Sepuasnya! Hingga Masa Berlaku Kodegiftnya Habis!
`.trim(), `${wm}`, 'Owner', '.owner')
handler.help = ['buygift']
handler.tags = ['gift']
handler.command = /^buygift$/i
handler.register = true
module.exports = handler

let wm = global.botwm
