let { MessageType } = require('@adiwajshing/baileys')

//Harga Build
let rumahsakit = 50000
let benteng = 100000
let camptroops = 110000
let pertanian = 70000
let pertambangan = 70000

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {


let type = (args[0] || '').toLowerCase()
let upgrade = (args[0] || '').toLowerCase()

let user = global.db.data.users[m.sender]


let caption = `
🏰𝗞𝗜𝗡𝗚𝗗𝗢𝗠 𝗙𝗔𝗖𝗜𝗟𝗜𝗧𝗬 𝗟𝗜𝗦𝗧 🏰

List Beserta Harga
🏥Hospital :             ${rumahsakit}💸
🌾Pertanian:            ${pertanian}💸
🏕️camptroop:         ${camptroops}💸
⚒️Pertambangan:  ${pertambangan}💸
🏯Benteng:              ${benteng}💸

🛠️Cara Build Fasilitas
${usedPrefix}build <type>
🛠️Cara Upgrade Fasilitas
${usedPrefix}upgrade <type> [ FITUR BELUM SELESAI ]


🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃
`
//
        try {
               if (/build|bangun/i.test(command)) {
               	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
          switch (type) {
                	       case 'benteng': case 'fortress':
                if ( global.db.data.users[m.sender].batu > benteng * count ) {
                
               	global.db.data.users[m.sender].batu >= benteng * count
                	global.db.data.users[m.sender].fortress += count * 1
                    global.db.data.users[m.sender].kayu -= benteng * count
                    global.db.data.users[m.sender].batu -= benteng * count
                       m.reply(`*BERHASIL*\n🏯Bentengmu Selesai Dibangun`)
                       } else m.reply(`SDA Kamu Tidak Cukup Untuk Membangun Benteng Yang Senilai ${benteng * count }Kayu ${benteng * count}batu`)
                          break
                           case 'pertanian':
                           if ( user.batu > pertanian * count ) {
                	user.batu >= pertanian * count
                	user.pertanian += count * 1
                    user.kayu -= pertanian * count
                    user.batu -= pertanian * count
                       } else m.reply(`SDA Kamu Tidak Cukup Untuk Membangun Pertanian Yang Senilai ${pertanian * count }Kayu ${pertanian * count}batu`)
                      break
                        case 'camptroops':
                        case 'camptroop':
                   if ( user.batu > camptroops * count ) {
                    user.batu >= camptroops * count
                    user.camptroops += count * 1
                    user.kayu -= camptroops * count
                    user.batu -= camptroops * count
                    } else m.reply(`SDA Kamu Tidak Cukup Untuk Membangun Kamp Pasukan Yang Senilai ${camptroops * count }Kayu ${camptroops * count}batu`)
                      
                      break
                    case 'pertambangan':
                    if ( user.tambang > pertambangan * count ) {
                   user.batu >= pertambangan * count
                    user.tambang += count * 1
                    user.kayu -= pertambangan * count
                    user.batu -= pertambangan * count 
                    } else m.reply(`Sda Kamu Tidak Cukup Untuk Membangun Pertanian Yang Senilai ${pertambangan * count }Kayu ${pertambangan * count}batu`)
                      
                       break
                    case 'rumahsakit': 
                    case 'hospital':
                    if ( user.rumahsakit > rumahsakit * count ) {
                    user.rumahsakit += count * 1
                    user.kayu -= rumahsakit * count
                    user.batu -= rumahsakit * count
                    } else m.reply(`SDA Kamu Tidak Cukup Untuk Membangun Pertanian Yang Senilai ${rumahsakit * count }Kayu ${rumahsakit * count}batu`)
                       break

                       default:
                        return conn.reply(m.chat, caption, m)
                }
        }
    } catch (e) {
        conn.reply(m.chat, caption, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['build <args>', 'upgrade <sell|buy> <args>']
handler.tags = ['rpg']
handler.owner = false
handler.register = true
handler.limit = true
handler.command = /^(build|bangun|upgrade|upgd)$/i
module.exports = handler