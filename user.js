let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*🌐Jumlah Database Saat Ini ${totalreg} User*`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(jumlahdatabase|user)$/i
module.exports = handler
