// insert adjacent element
function insertElement() {
	// add before `filter items` input
	const filterItems = document.querySelector('.filter')
	const h1 = document.createElement('h1')
	h1.textContent = 'insertAdjacentElement'
	filterItems.insertAdjacentElement('beforebegin', h1)
}
insertElement()

// insert adjacent text
function insertText() {
	const item = document.querySelector('li:first-child')
	item.insertAdjacentText('beforebegin', 'insertAdjacentText')
}
insertText()

// insert adjacent html
function insertHTML() {
	const clearBtn = document.querySelector('#clear')
	clearBtn.insertAdjacentHTML('afterend', '<h1>insertAdjacentHTML</h1>')
}
insertHTML()
