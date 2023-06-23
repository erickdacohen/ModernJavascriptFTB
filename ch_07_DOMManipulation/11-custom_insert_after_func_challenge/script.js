/* There exists the `insertBefore()` function but no insertAfter()
function. The challenge is to create a custom one.  */

// insertBefore Example
function insertBeforeItem() {
	// select the parent
	const ul = document.querySelector('ul')

	// create element you want to insert
	const textBefore = document.createElement('li')
	textBefore.textContent = 'This is the before func.'

	// select item in parent you want to insert before
	const thirdItem = document.querySelector('li:nth-child(3)')
	ul.insertBefore(textBefore, thirdItem)
}

insertBeforeItem()

const li = document.createElement('li')
li.textContent = 'Inserted After'

const firstItem = document.querySelector('li:first-child')

// create `insertAfter()` function
function insertAfter(newEl, existingEl) {
	existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
}

insertAfter(li, firstItem)
