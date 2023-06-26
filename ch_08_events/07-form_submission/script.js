const form = document.getElementById('item-form')

const onSubmit = (e) => {
	e.preventDefault()
	const item = document.getElementById('item-input').value
	const priority = document.getElementById('priority-input').value

	// form validation on frontend
	if (item === '' || priority === 0) {
		alert('Fill in all fields')
		return
	}

	console.log('submitted!')
}

function onSubmit2(e) {
	e.preventDefault()
	// using form data object
	const formData = new FormData(form)

	const item = formData.get('item')
	const priority = formData.get('priority')

	console.log(item, priority)
}

form.addEventListener('submit', onSubmit2)
