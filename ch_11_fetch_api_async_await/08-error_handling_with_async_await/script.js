const getUsers = async () => {
	try {
		// const response = await fetch('https://jsonplaceholder.typicode.com/users')
		const response = await fetch('http://httpstat.us/404')
		if (!response.ok) {
			throw new Error('Request Failed')
		}

		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

const getPosts = async () => {
	const response = await fetch('111https://jsonplaceholder.typicode.com/posts')
	if (!response.ok) {
		throw new Error('Request Failed')
	}
	const data = await response.json()
	console.log(data)
}

getUsers()
// getPosts().catch((error) => console.log(error))
