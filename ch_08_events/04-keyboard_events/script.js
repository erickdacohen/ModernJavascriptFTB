const itemInput = document.getElementById('item-input')

const onKeyPress = (e) => {
	console.log(e)
}

const onKeyDown = (e) => {
	// key
	// if (e.key === 'Enter') {
	// 	alert('Entered')
	// }

	if (e.repeat) {
		console.log('You are holding down ' + e.key)
	}
}

itemInput.addEventListener('keypress', onKeyDown)
