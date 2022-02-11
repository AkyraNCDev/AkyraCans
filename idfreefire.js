let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command }) => {
  if (!args[0]) throw `Uhm.. Id Nya Mana?\n\nContoh:\n${usedPrefix + command} 1906651269`
  let res = await fetch(`https://api.lolhuman.xyz/api/freefire/id?apikey=rey2k21&id=${args[0]}`)
    if (!res.ok) throw eror
  let json = await res.json()
  m.reply(json.result)
}
handler.help = ['userff'].map(v => v + ' <id>')
handler.tags = ['internet']
handler.command = /^userff$/i
handler.limit = true
handler.register = true
module.exports = handler
