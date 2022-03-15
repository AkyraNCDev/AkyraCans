let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "‌𝗟𝗲𝗮𝗱𝗲𝗿𝗯𝗼𝗮𝗿𝗱",
                        "description": "Menampilkan Leaderboard Di Bot Rikka\nJika Ingin Masuk Top, Mainkan Beberapa Game",
                        "buttonText": "Main Menu",
                        "footerText": "🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                       "title": `Top Level`,
                                       "rowId": ".toplevel"
                                    }, {
                                       "title": `Top Money`,
                                       "rowId": ".topmoney"
                                       }, {
                                       "title": `Top Tabungan`,
                                       "rowId": ".toptabungan"
                                       }, {
                                       "title": `Top Exp`,
                                       "rowId": ".topexp"
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

handler.command = /^(leaderboard|lb)$/i
handler.help = ['leaderboard','lb']
module.exports = handler
handler.tags = ['rpg'] 
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

