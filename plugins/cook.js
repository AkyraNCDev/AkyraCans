let { MessageType } = require('@adiwajshing/baileys')
//BY RIZKY ADI∅
//DONT DELETE THIS CREDIT
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || '').toLowerCase()
    let msk= (args[0] || '').toLowerCase()
let cok = `
Cuisine List🍳

🍖${usedPrefix}ayamb [ To Cook Grilled Chicken ]
🍗${usedPrefix}ayamg [ To Cook Fried Chicken ]
🍣${usedPrefix}leleg
🍣${usedPrefix}leleb [ Lele Bakar ]
🍖${usedPrefix}sapir
🍖${usedPrefix}ssapi [ To Cook Beef Steak ]

Cara Memasak
${usedPrefix + command } sapir
Cara Memakan
${usedPrefix}eat ayamg
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayamb':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                           global.db.data.users[m.sender].ayam >= count * 1
                            global.db.data.users[m.sender].ayam -= count * 1
                            global.db.data.users[m.sender].ayamb += count * 1
                            conn.reply(m.chat, `Succes Memasak ${count } Ayam Bakar🍖`, m)
                       } else conn.reply(m.chat, `Stok Buruan Mu Tidak Cukup Untuk Dimasak`, m)
break

                  case 'sapir':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                            global.db.data.users[m.sender].sapi >= count * 1
                            global.db.data.users[m.sender].sapi -= count * 1
                            global.db.data.users[m.sender].sapir += count * 1
                            conn.reply(m.chat, `Succes Memasak ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `Hewan Yang Kamu Dapatkan Tidak Cukup Untuk Dimasak`, m)
break
                   case 'ayamg':
            if (global.db.data.users[m.sender].ayam >= count * 1) {
                           global.db.data.users[m.sender].ayam >= count * 1
                            global.db.data.users[m.sender].ayam -= count * 1
                            global.db.data.users[m.sender].ayamg += count * 1
                            conn.reply(m.chat, `Succes Memasak ${ count } Ayam Goreng🍗`, m)
                       } else conn.reply(m.chat, `Stok Buruan Mu Tidak Cukup Untuk Dimasak`, m)
break
                        case 'leleg':
            if (global.db.data.users[m.sender].lele >= count * 1) {
                          global.db.data.users[m.sender].lele >= count * 1
                            global.db.data.users[m.sender].lele -= count * 1
                            global.db.data.users[m.sender].leleg += count * 1
                            conn.reply(m.chat, `Succes Memasak ${ count } Lele Goreng🍤`, m)
                       } else conn.reply(m.chat, `Stok Buruan Mu Tidak Cukup Untuk Dimasak`, m)
break
                        case 'leleb':
            if (global.db.data.users[m.sender].lele >= count * 1) {
                            global.db.data.users[m.sender].lele >= count * 1///DONT DELETE THIS
                            global.db.data.users[m.sender].lele -= count * 1
                            global.db.data.users[m.sender].leleb += count * 1
                            conn.reply(m.chat, `Succes Memasak ${ count } Lele Bakar🐟`, m)
                       } else conn.reply(m.chat, `Stok Buruan Mu Tidak Cukup Untuk Dimasak`, m)
break
             case 'ssapi':
            if (global.db.data.users[m.sender].sapi >= count * 1) {
                            global.db.data.users[m.sender].sapi >= count * 1///DONT DELETE THIS
                            global.db.data.users[m.sender].sapi -= count * 1
                            global.db.data.users[m.sender].ssapi += count * 1
                            conn.reply(m.chat, `Succes Memasak ${ count } Steak Sapi`, m)
                       } else conn.reply(m.chat, `Stok Buruan Mu Tidak Cukup Untuk Dimasak`, m)
break
                default:
                    return conn.sendButton( m.chat, cok, `❦ʀᴇɴ-ʙᴏᴛ`, `Makan`, `.eat ayamb 1`)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya Ada Yang Error, Coba Laporin Ke Owner Deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <Cook> <args>']
handler.tags = ['rpg']

handler.command = /^(masak|cook)$/i
module.exports = handler