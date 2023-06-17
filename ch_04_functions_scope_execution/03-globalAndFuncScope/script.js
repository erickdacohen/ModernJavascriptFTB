// Window is a top level object
// alert('Hello!')
console.log(window.innerWidth)

const x = 100
console.log(x, 'in global')
function run() {
	console.log(window.innerHeight)
	console.log(x, 'in function')
}
run()

if (true) console.log(x, 'in block')

// scope in function
function add() {
	const y = 50 // function scoped
	const x = 1 // can overide global scope in func
	console.log(x + y) // x is global so can be used in func
}
add()
