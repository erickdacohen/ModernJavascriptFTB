// Ways to declare a variable
// var, let, const

let firstName = 'John'
let lastName = 'Doe'
console.log(firstName, lastName)

let age = 30
console.log(age)

// reassigning variables
age = 31
console.log(age)

// While let can be reassigned, const cannot
const x = 100
// This would throw an error:
// x = 200

// Can declare multiple values at once

let a, b, c

const d = 10,
	e = 20,
	f = 30
