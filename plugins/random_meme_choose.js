//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, args, text }) => {
  try {
    if (!text) return m.reply('Contoh:\n\n#memesub cinta')
    let res = await fetch('https://meme-api.herokuapp.com/gimme/' + text)
    let json = await res.json()
    if (json.status) throw json
    let caption = `
🎀𝚁𝚒𝚔𝚔𝚊 𝙱𝙾𝚃

Author: ${json.author} Subreddit: ${json.subreddit}
${json.postLink}
`.trim()
    conn.sendFile(m.chat, json.url, '', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Error!'
    }
}

handler.help = ['memesub (subreddit)']
handler.tags = ['image']
handler.command = /^memesub$/i
handler.limit = true
handler.register = true
handler.fail = null

module.exports = handler
