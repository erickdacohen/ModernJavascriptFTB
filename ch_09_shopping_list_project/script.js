// Get all the elements in varaibles
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function displayItems() {
	const itemsFromStorage = getItemsFromStorage()
	itemsFromStorage.forEach((item) => addItemToDOM(item))
	checkUI()
}

function onAddItemSubmit(e) {
	e.preventDefault()
	const newItem = itemInput.value
	if (!newItem) {
		alert('Please add item')
		return
	}

	// add item to DOM
	addItemToDOM(newItem)

	// add item to local storage
	addItemToStorage(newItem)

	checkUI()

	// clear text input value after submit
	itemInput.value = ''
}

function addItemToDOM(item) {
	// create list item
	const li = document.createElement('li')
	li.appendChild(document.createTextNode(item))
	const button = createButton('remove-item btn-link text-red')
	li.appendChild(button)

	itemList.appendChild(li)
}

function createButton(classes) {
	const button = document.createElement('button')
	button.className = classes
	const icon = createIcon('fa-solid fa-xmark')
	button.appendChild(icon)
	return button
}

function createIcon(classes) {
	const icon = document.createElement('i')
	icon.className = classes
	return icon
}

function addItemToStorage(item) {
	const itemsFromStorage = getItemsFromStorage()

	// add item to array
	itemsFromStorage.push(item)

	// convert to JSON string and put in local storage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage() {
	let itemsFromStorage
	if (localStorage.getItem('items') === null) {
		itemsFromStorage = []
	} else {
		itemsFromStorage = JSON.parse(localStorage.getItem('items'))
	}

	return itemsFromStorage
}

function onClickItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		removeItem(e.target.parentElement.parentElement)
	}
}

function removeItem(item) {
	// remove from DOM
	item.remove()

	// remove from storage
	removeItemFromStorage(item.textContent)

	checkUI()
}

function removeItemFromStorage(item) {
	let itemsFromStorage = getItemsFromStorage()

	// filter out item
	itemsFromStorage = itemsFromStorage.filter((i) => i !== item)

	// reset to storage
	localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function clearItems() {
	if (confirm('you sure?')) {
		while (itemList.firstChild) {
			itemList.firstChild.remove()
		}
	}

	// clear from local storage
	localStorage.removeItem('items')

	checkUI()
}

function filterItems(e) {
	const items = document.querySelectorAll('li')
	const text = e.target.value.toLowerCase()
	items.forEach((item) => {
		const itemName = item.firstChild.textContent.toLowerCase()
		if (itemName.indexOf(text) !== -1) {
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}
	})
}

function checkUI() {
	const items = document.querySelectorAll('li')
	if (items.length === 0) {
		clearBtn.style.display = 'none'
		itemFilter.style.display = 'none'
	} else {
		clearBtn.style.display = 'block'
		itemFilter.style.display = 'block'
	}
}

// initialize app with event listeners
function init() {
	// event listeners
	itemForm.addEventListener('submit', onAddItemSubmit)
	itemList.addEventListener('click', onClickItem)
	clearBtn.addEventListener('click', clearItems)
	itemFilter.addEventListener('input', filterItems)
	document.addEventListener('DOMContentLoaded', displayItems)
	checkUI()
}
init()
