function getData(endpoint) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open('GET', endpoint)

		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(JSON.parse(this.responseText))
				} else {
					reject('Something went wrong')
				}
			}
		}

		setTimeout(() => {
			xhr.send()
		}, Math.floor(Math.random() * 3000) + 1000)
	})
}

// const moviesPromise = getData('./movies.json')
// const actorsPromise = getData('./actors.json')
// const directorsPromise = getData('./directors.json')

// const dummyPromise = new Promise((resolve, reject) => {
// 	resolve('Hello, world!')
// })

// Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
// 	.then((data) => {
// 		console.log(data)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})

async function getAllData() {
	const movies = await getData('./movies.json')
	console.log(movies)
	const actors = await getData('./actors.json')
	console.log(actors)
	const directors = await getData('./directors.json')
	console.log(directors)
}

async function getAllDataWithFetch() {
	const moviesRes = await fetch('./movies.json')
	const movies = await moviesRes.json()
	console.log(movies)

	const actorsRes = await fetch('./actors.json')
	const actors = await actorsRes.json()
	console.log(actors)

	const directorsRes = await fetch('./directors.json')
	const directors = await directorsRes.json()
	console.log(directors)
}

getAllDataWithFetch()
// getAllData()
