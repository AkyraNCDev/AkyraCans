let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Активный бот✔️
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*Its Me Akyra Cans*\nDev ${wm}`, 'status@broadcast')
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm