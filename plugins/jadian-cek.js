let handler = async (m, { conn, usedPrefix, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `Maaf, Nomor yang anda masukan salah!`, m)

  if (!text && !m.quoted){
    user = m.sender
    orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    orang = "Orang yang kamu balas"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang yang kamu tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("```Target Tidak Terdaftar Di Dalam Database! 🗃️```")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("```Target Tidak Terdaftar Di Dalam Database! 🗃️```")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `${orang} Jomblo Dan Tidak Ada Yang Mau 👥\n\n▸ Ketik *.tembak @user* untuk menembak seseorang`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `📝 ${orang} Sedang Menunggu Jawaban @${global.db.data.users[user].pasangan.split('@')[0]} Karena Sedang Tidak Diterima Atau Di Tolak\n\n▸ Ketik *${usedPrefix}ikhlasin* Untuk Sadar Diri!`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `[💓] ${orang} Sedang Menjalani Hubungan Dengan @${global.db.data.users[user].pasangan.split('@')[0]}\nKamu Jangan Coba Coba Nikung Ya`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['jodoh']
handler.command = /^(cekpacar)$/i
handler.fail = null
module.exports = handler