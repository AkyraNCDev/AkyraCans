/**
* maykell
**/

let handler = async (m, { conn, text }) => {

	let monsters = [
		{ area: 1, name: "Goblin" },
		{ area: 1, name: "Slime" },
		{ area: 1, name: "Wolf" },
		{ area: 2, name: "Nymph" },
		{ area: 2, name: "Skeleton" },
		{ area: 2, name: "Wolf" },
		{ area: 3, name: "Baby Demon" },
		{ area: 3, name: "Ghost" },
		{ area: 3, name: "Zombie" },
		{ area: 4, name: "Imp" },
		{ area: 4, name: "Witch" },
		{ area: 4, name: "Zombie" },
		{ area: 5, name: "Ghoul" },
		{ area: 5, name: "Giant Scorpion" },
		{ area: 5, name: "Unicorn" },
		{ area: 6, name: "Baby Robot" },
		{ area: 6, name: "Sorcerer" },
		{ area: 6, name: "Unicorn" },
		{ area: 7, name: "Cecaelia" },
		{ area: 7, name: "Giant Piranha" },
		{ area: 7, name: "Mermaid" },
		{ area: 8, name: "Giant Crocodile" },
		{ area: 8, name: "Nereid" },
		{ area: 8, name: "Mermaid" },
		{ area: 9, name: "Demon" },
		{ area: 9, name: "Harpy" },
		{ area: 9, name: "Killer Robot" },
		{ area: 10, name: "Dullahan" },
		{ area: 10, name: "Manticore" },
		{ area: 10, name: "Killer Robot" },
		{ area: 11, name: "Baby Dragon" },
		{ area: 11, name: "Young Dragon" },
		{ area: 11, name: "Scaled Baby Dragon" },
		{ area: 12, name: "Kid Dragon" },
		{ area: 12, name: "Not so young Dragon" },
		{ area: 12, name: "Scaled Kid Dragon" },
		{ area: 13, name: "Definitely not so young Dragon" },
		{ area: 13, name: "Teen Dragon*" },
		{ area: 13, name: "Scaled Teen Dragon" },
	]
	let player = global.db.data.users[m.sender]
	let pname = conn.getName(m.sender)

	let cdm = `${MeNit(new Date - player.lasthunt)}`
	let cds = `${DeTik(new Date - player.lasthunt)}`
	let cd1 = Math.ceil(01 - cdm)
	let cd2 = Math.ceil(60 - cds)


	let areaPlayer = monsters.map(v => v.area)
    areaPlayer = areaPlayer[Math.floor(Math.random() * areaPlayer.length)]
	let area_monsters = monsters.filter(monster => { return monster.area === areaPlayer })
	let monster = area_monsters[Math.floor(Math.random() * area_monsters.length)]
	let monsterName = monster.name.toUpperCase()
    

	if (new Date -  global.db.data.users[m.sender].lasthunt > 120000) {
		let sum = 10 * areaPlayer - 59
		let dmg = (player.sword  * 5 + player.armor * 5 - sum)
		dmg = dmg < 0 ? Math.abs(dmg) : 0
		let coins = areaPlayer * 50
		let exp = areaPlayer * 35

		player.healt -= dmg
		player.lasthunt = new Date * 1 // waktu hunt 2menit

		if (player.healt < 0) {
			let msg = `⚰️*${pname}* Anda Mati Di Bunuh Oleh ${monsterName}`
			if (player.level > 0) {
				player.level -= 1
				msg += `\n⬇️Level Anda Turun 1 Karena Mati Saat Berburu!`
			}
			player.healt = 100
			m.reply(msg)
			return
		}

		player.money += coins * 1
		player.exp += exp * 1

		let pesan = `🎊*${pname}* Menemukan Dan Membunuh ${monsterName}\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)} coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${dmg}Hp, Tersisa ${player.healt}/${100}`
		m.reply(pesan)
	} else throw `⏲️Tunggu *${cd1}:${cd2}* Untuk Berburu Lagi`
}

handler.help = ['hunt']
handler.tags = ['rpg']
handler.command = /^hunt/i

handler.disabled = false
handler.register = true

handler.fail = null

module.exports = handler

function MeNit(ms) {
	let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
	return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
	let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
	return [s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
  }
  
