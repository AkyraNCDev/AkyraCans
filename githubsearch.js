let fetch = require('node-fetch')
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} saipulanuar`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
🖇️${repo.html_url}_
📆Dibuat Pada ${formatDate(repo.created_at)}
⏫Terakhir Update Pada ${formatDate(repo.updated_at)}

👁️${repo.watchers}     🥄${repo.forks}     ⭐ ${repo.stargazers_count}

${repo.open_issues} Issue${repo.description ? `
📑Deskripsi:\n${repo.description}` : ''}
♻️Clone: \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
    m.reply(str)
}
handler.help = ['gitsearch'].map(v => v + ' <pencarian>')
handler.tags = ['internet']

handler.command = /^git(ithub|h)search$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
