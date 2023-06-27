function getData(endpoint, cb) {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', endpoint)

	xhr.onreadystatechange = function () {
		if (this.status === 200 && this.readyState === 4) {
			cb(JSON.parse(this.responseText))
		}
	}

	setTimeout(() => {
		xhr.send()
	}, Math.floor(Math.random() * 3000) + 1000)
}

getData('./movies.json', (d) => {
	console.log(d)
	getData('./actors.json', (d) => {
		console.log(d)
		getData('./directors.json', (d) => {
			console.log(d)
		})
	})
})
// getData('./actors.json')
// getData('./directors.json')
