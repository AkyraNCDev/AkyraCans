let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "‌𝗥𝗔𝗠𝗔𝗗𝗛𝗔𝗡 𝟮𝟬𝟮𝟮 ☪",
                        "description": "\n𝗘𝗩𝗘𝗡𝗧          𝗠𝟭   𝗠𝟮    𝗠𝟯    𝗠𝟰   𝗜𝗙\n\n📨Event 1   🔵   🔵   🔵    🔵    🔴\n⏫Event 2   🔴   🔴   🔴    🔴    🔵\n🛒Event 3   🔵   🔵   🔵    🔵    🔵\n🛍️Event 4   🔴   🔴   🔴    🔴    🔵\n🏆Event 5   🔴   🔴   🔴    🔴    🔵\n🐪Event 6   🔵   🔵   🔵    🔵    🔴\n🕊️Event 7   🔴   🔴   🔴    🔴    🔵\n\n📖Description\n🔵 ➣ Event Berlangsung\n🔴 ➣ Event Tutup\nM1 ➣ Minggu Ke-1\nM2 ➣ Minggu Ke-2\nM3 ➣ Minggu Ke-3\nM4 ➣ Minggu Ke-4\nIF  ➣   Idul Fitri",
                        "buttonText": "List of Ramadan Events☪️",
                        "footerText": "\n📆Periode Event 2 April - 2 Mei\n🔥Hari Puncak 2 Mei - 3 Mei\n\n''sᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ʙᴜʟᴀɴ sᴜᴄɪ ʀᴀᴍᴀᴅʜᴀɴ 1443 ʜ. sᴇᴍᴏɢᴀ ᴋɪᴛᴀ sᴇʟᴀʟᴜ ᴍᴇɴᴅᴀᴘᴀᴛ ᴋᴇʙᴇʀᴋᴀʜᴀɴ ʏᴀɴɢ ᴍᴇʟɪᴍᴘᴀʜ ᴅᴀɴ ᴅɪᴊᴀᴜʜᴋᴀɴ ᴅᴀʀɪ ᴡᴀʙᴀʜ ᴄᴏᴠɪᴅ-19. ᴍᴀʀɪ ᴋɪᴛᴀ ᴊᴀɢᴀ ᴋᴇsᴇʜᴀᴛᴀɴ ᴅᴇᴍɪ ᴋᴇʟᴀɴᴄᴀʀᴀɴ ɪʙᴀᴅᴀʜ ᴘᴜᴀsᴀ ᴅɪ ᴛᴇɴɢᴀʜ ᴘᴀɴᴅᴇᴍɪ ɪɴɪ.''\n\n©Akyra",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                        "title": `📨Event 1`,
                                        "description": "Daily Login",
                                        "rowId": ".event1"
                                          }, {
                                       "title": `⏫Event 2`,
                                       "description": "Korupsi Special Buff",
                                        "rowId": ".event2"
                                        }, {
                                       "title": `🛒Event 3`,
                                       "description": "Ramadhan Special Shop 2022",
                                        "rowId": ".event3"
                                        }, {
                                       "title": `🛍️Event 4`,
                                       "description": "Ramadan Discount",
                                        "rowId": ".event4"
                                        }, {
                                       "title": `🏆Event 5`,
                                       "description": "Prizes for Top Leaderboard",
                                        "rowId": ".event5"
                                        }, {
                                       "title": `🐪Event 6`,
                                       "description": "Camel Token Drop",
                                        "rowId": ".event6"
                                        }, {
                                       "title": `🕊️ Event 7`,
                                       "description": "Kurma Token Drop",
                                        "rowId": ".event7"
                                        }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['rd']
module.exports = handler
handler.tags = ['rd'] 
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

