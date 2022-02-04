let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "‌╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼",
                        "description": "Ownerku Gans & Cans><",
                        "buttonText": "Main Menu",
                        "footerText": "🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                        "title": `OWNER`,
                                        "rowId": ".owner1"
                                         }, {
                                        "title": `PARTNER`,
                                        "rowId": ".partner"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['owner']
module.exports = handler
handler.tags = ['jdhsnaj'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler

