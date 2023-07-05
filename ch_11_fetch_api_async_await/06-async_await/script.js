const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ name: 'John', age: 20 })
	}, 1000)
})

// old way
// promise.then((data) => console.log(data))

async function getPromise() {
	const response = await promise
	console.log(response)
}

// getPromise()

async function getUsers() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	console.log(data)
}

// getUsers()

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	console.log(data)
}

getPosts()
