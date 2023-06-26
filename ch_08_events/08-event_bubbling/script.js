const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form')

button.addEventListener('click', (e) => {
	alert('button was clicked')
	// to stop bubbling
	e.stopPropagation()
})

form.addEventListener('click', () => alert('Form clicked'))
