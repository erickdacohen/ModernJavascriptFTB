// const message = {
// 	id: 1,
// 	text: 'Hello world',
// }

// module.exports = message

function capitalizeWords(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.substr(1))
		.join(' ')
}

function makeMoney(amount) {
	return `$${amount}`
}

module.exports = { capitalizeWords, makeMoney }
