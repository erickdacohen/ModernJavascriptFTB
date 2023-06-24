const clearBtn = document.querySelector('#clear')

// clearBtn.onclick = function () {
// 	alert('Clear Items.')
// }

// Add eventListener
// clearBtn.addEventListener('click', function () {
// 	alert('Button clicked.')
// })

function onClear() {
	const itemList = document.querySelector('ul')
	const items = itemList.querySelectorAll('li')
	// items.forEach((item) => item.remove())
	// also with while loop
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild)
	}
}
clearBtn.addEventListener('click', onClear)

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)
