let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	const sukses = './src/sukses.webp'
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Cie Mau Ke Wc.', m)
}
handler.help = ['bkp']
handler.tags = ['hentai']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = true
module.exports = handler