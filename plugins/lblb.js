let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "‌❦ʀᴇɴ-ʙᴏᴛ",
                        "description": "- List Hentai",
                        "buttonText": "Main Menu",
                        "footerText": "A2",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                       "title": `Hentai Girl Solo`,
                                       "rowId": ".girlsolo"
                                    }, {
                                       "title": `Hentai Loli`,
                                       "rowId": ".hentailoli"
                                        }, { 
                                       "title": `Hentai Neko`,
                                        "rowId": ".hentaineko"
                                      }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['hentailist']
handler.help = ['hentailist']
module.exports = handler
handler.tags = ['hentai'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler

