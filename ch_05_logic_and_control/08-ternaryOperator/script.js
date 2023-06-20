const age = 20
// using if statement
if (age >= 18) {
	console.log('you can vote.')
} else {
	console.log('not allowed to vote.')
}

// using ternary operator
age >= 18 ? console.log('you can vote') : console.log('not allowed to vote.')

// Assiging a conditional value to a variable
const canVote = age >= 18 ? true : false

// multiple statements

const auth = true
// let redirect
// if (auth) {
// 	alert('Welcome!')
// 	redirect = '/dashboard'
// } else {
// 	alert('Denied.')
// 	redirect = '/login'
// }

const redirect = auth
	? (alert('Welcome!'), '/dashboard')
	: (alert('denied'), '/login')

console.log(redirect)
