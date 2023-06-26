// Get all the elements in varaibles
const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')

function addItem(e) {
	e.preventDefault()
	const newItem = itemInput.value
	if (!newItem) {
		alert('Please add item')
		return
	}

	// create list item
	const li = document.createElement('li')
	li.appendChild(document.createTextNode(newItem))
	const button = createButton('remove-item btn-link text-red')
	li.appendChild(button)

	itemList.appendChild(li)

	checkUI()

	// clear text input value after submit
	itemInput.value = ''
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

function removeItem(e) {
	if (e.target.parentElement.classList.contains('remove-item')) {
		if (confirm('you sure?')) {
			e.target.parentElement.parentElement.remove()
			checkUI()
		}
	}
}

function clearItems() {
	while (itemList.firstChild) {
		itemList.firstChild.remove()
	}
	checkUI()
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

// event listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)

checkUI()
