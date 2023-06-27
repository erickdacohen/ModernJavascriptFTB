const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

function generateJoke() {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			if (this.status === 200) {
				jokeEl.textContent = JSON.parse(this.responseText).value
			} else {
				jokeEl.textContent = 'Error'
			}
		}
	}
	xhr.send()
}

document.addEventListener('DOMContentLoaded', generateJoke)
