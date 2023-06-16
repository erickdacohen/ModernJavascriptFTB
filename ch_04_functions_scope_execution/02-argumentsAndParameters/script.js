// default parameteres
function registerUser(user = 'Bot') {
	return user + ' is registered'
}

console.log(registerUser('Erick'))
console.log(registerUser())

// rest params
function sum(...numbers) {
	let total = 0
	// will cover for loops later
	for (const num of numbers) {
		total += num
	}
	return total
}

console.log(sum(1, 2, 3))

// objects as params
function loginUser(user) {
	return `The user ${user.name} with id: ${user.id} is logged in`
}
const exampleUser = { name: 'John', id: 1 }
console.log(loginUser(exampleUser))

// array as params
function getRandom(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length)
	const item = arr[randomIndex]
	console.log(item)
}

getRandom([1, 3, 5, 6, 7, 8])
