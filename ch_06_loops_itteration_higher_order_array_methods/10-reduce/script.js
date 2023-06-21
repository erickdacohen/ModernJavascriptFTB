// Reduce used to reduce array to a single value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce(function (accumulator, currentVal) {
	return accumulator + currentVal
})
console.log(sum)

const cart = [
	{ id: 1, name: 'Prod 1', price: 130 },
	{ id: 2, name: 'Prod 2', price: 150 },
	{ id: 3, name: 'Prod 3', price: 175 },
]

const cartTotal = cart.reduce((acc, prod) => {
	return acc + prod.price
}, 0)
console.log(cartTotal)
