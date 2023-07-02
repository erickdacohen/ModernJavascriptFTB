// Fetch API automatically returns a promise
// fetching a json file
fetch('./movies.json')
	.then((res) => {
		return res.json()
	})
	.then((data) => {
		console.log(data)
	})

// fetching a txt file
fetch('./test.txt')
	.then((res) => res.text())
	.then((data) => console.log(data))

// fetching from an api
fetch('https://api.github.com/users')
	.then((res) => res.json())
	.then((data) => {
		document.querySelector('h1').textContent = data[0].login
	})
// .then((data) => console.log(data))
