const axios = require('axios')
const cheerio = require('cheerio')

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${command} [username]
Contoh: ${usedPrefix}${command} drak_ipul123
`.trim()
  let res = await igstalk(args[0])
  m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `
┏━━━ꕥ *INSTAGRAM STALKER* ꕥ━⬣
┃✾ *Username:* ${json.username}
┃✾ *Nickname:* ${json.fullName}
┃✾ *Followers:* ${json.followersM} Followers
┃✾ *Following:* ${json.followingM} Following
┃✾ *Posting:* ${json.postsCountM} Postingan
┃✾ *Link:* https://instagram.com/${json.username}
┃✾ *Bio:* ${json.bio}
┗━❑
`.trim() // tambahin sendiri json.blablabla :)
 m.reply('gagal:v')
}
handler.help = ['igstalk <username>']
handler.tags = ['sodiud']
handler.command = /^(dosidi)$/i
handler.limit = 3
module.exports = handler