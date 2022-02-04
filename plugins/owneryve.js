let handler = function (m) {
	this.sendContact(m.chat, '6281347927862', 'Owner RikkaBot :)', m)
}

handler.customPrefix = ['🍭Owner RikkaBot'] 
handler.command = new RegExp

module.exports = handler