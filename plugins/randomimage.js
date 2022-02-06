let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "‌Random Image",
                        "description": "\nSilahkan Pilih Menu Dibawah Untuk Menampilkan Random Image Sesuai Dengan Command",
                        "buttonText": "Main Menu",
                        "footerText": "🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                       "title": `Cecan`,
                                       "rowId": ".cecan"
                                    }, {
                                       "title": `Cogan`,
                                       "rowId": ".cogan"
                                       }, {
                                       "title": `BTS `,
                                       "rowId": ".kpop bts"
                                       }, {
                                       "title": `Top Limit`,
                                       "rowId": ".toplimit"
}, {
                                       "title": `Top Diamond`,
                                       "rowId": ".topdiamond"
}, {
                                       "title": `Top Potion`,
                                       "rowId": ".toppotion"
}, {

                                       "title": `Top Uncommon`,
                                       "rowId": ".topuncommon"
                                        }, { 
                                       "title": `Top Common`,
                                        "rowId": ".topcommon"
                                        }, {
                                       "title": `Top Mythic`,
                                       "rowId": ".topmythic"
                                       }, {
                                       "title": `Top Legendary`,
                                       "rowId": ".toplegendary"
                                      }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = /^(nshajw)$/i
handler.help = ['kwkwk']
module.exports = handler
handler.tags = ['skisuz'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.limit = true

handler.fail = null
handler.exp = 20

module.exports = handler

