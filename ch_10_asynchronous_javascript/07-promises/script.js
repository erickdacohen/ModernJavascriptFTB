// Asynchronous and nonblocking eventual completion
// Promise is either fulfilled or rejected

// Create a new promise
const promise = new Promise((resolve, reject) => {
	// mimic an asynchronous task
	setTimeout(() => {
		console.log('Async task complete')
		// can pass data into resolve (that is returned for example)
		resolve({ name: 'John', age: 30 })
	}, 1000)
})

promise.then((user) => {
	console.log('promise consumed')
	console.log(user.age)
})

// non blocking so global scope clg runs first
console.log('Hello from global scope')

// example getting user
const getUser = new Promise((resolve, reject) => {
	let error
	setTimeout(() => {
		if (!error) {
			resolve({ name: 'Jane', age: 31 })
		} else {
			reject('Error: something went wrong')
		}
	}, 1000)
})

getUser
	.then((user) => console.log(user))
	.catch((error) => console.log(error))
	.finally(() => console.log('promise resolved or rejected'))
