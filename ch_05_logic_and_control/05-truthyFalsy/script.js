/*
Anything that isn't falsy is truthy.
There are 6 falsy values:

- false
- 0
- "" or '' (empty string)
- null
- undefined
- NaN
*/
let x = '' // falsy
x = [] // truthy

if (x) {
	console.log('This is truthy')
} else {
	console.log('This is falsy')
}

console.log(Boolean(x))

// caveats
const posts = []
if (posts.length) {
	console.log('List posts')
} else {
	console.log('No posts..')
}

console.log(false == 0) // is true
console.log(false === 0) // is false
