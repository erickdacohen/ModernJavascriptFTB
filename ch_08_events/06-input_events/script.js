const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

function onInput(e) {
	console.log(e.target.value)
}

function onChecked(e) {
	console.log(e.target.checked)
}

function onFocus(e) {
	console.log('input is focused')
	itemInput.style.outlineStyle = 'solid'
	itemInput.style.outlineWidth = '1px'
	itemInput.style.outlineColor = '#0f0'
}
function onBlur(e) {
	console.log('input is not focused')
	itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('input', onInput)
checkbox.addEventListener('input', onChecked)

itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
