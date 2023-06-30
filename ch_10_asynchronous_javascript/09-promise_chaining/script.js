const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = false
		if (!error) {
			resolve({ name: 'Mike', age: 32 })
		} else {
			reject('Error')
		}
	}, 1000)
})

promise
	.then((user) => {
		console.log(user)
		return user.name
	})
	.then((name) => {
		console.log(`Users name is ${name}`)
	})
	.catch((error) => console.log(error))
