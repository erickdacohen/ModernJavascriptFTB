const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const doubledNumbers = numbers.map((x) => x * 2)
console.log(doubledNumbers)

// chaining different methods
const evenDoubles = numbers
	.filter((num) => num % 2 === 0)
	.map((evenNum) => evenNum * 2)

console.log(evenDoubles)
