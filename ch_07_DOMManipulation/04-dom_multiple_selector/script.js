// querySelectorAll()

const listItems = document.querySelectorAll('.item')
console.log(listItems) // returns a node list; array-like structure
console.log(listItems[3].innerText) // can get a single one like array

// change all using forEach
listItems.forEach((item, index) => {
	item.style.color = 'red'
	if (index === 1) {
		item.remove()
	}
	if (index === 0) {
		item.innerText = 'Oranges'
	}
})
