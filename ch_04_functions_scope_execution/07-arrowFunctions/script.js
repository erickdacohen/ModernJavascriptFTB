// regular function
// function add(a, b) {
// 	return a + b
// }

// as arrow funcion
const add = (a, b) => {
	return a + b
}
console.log(add(1, 2))

// can shorten; implicit return
const subtract = (a, b) => a - b
console.log(subtract(1, 2))

// returning an object, must surround with ()
const createObj = () => ({
	name: 'Bob',
})
console.log(createObj())

// Arrow functions in callbacks
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (n) {
	console.log(n)
})

numbers.forEach((n) => console.log(n * 2))
