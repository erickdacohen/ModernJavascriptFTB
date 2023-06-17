// var is NOT block level scoped;

const x = 1
if (true) {
	const y = 2
	console.log(x + y)
}

// since y is block scoped, can't access like below
// console.log(y) <- would throw error
for (let i = 0; i <= 5; i++) {
	console.log(i)
}

// same for i
// console.log(i) <- would throw err

if (true) {
	const a = 1
	let b = 2
	var c = 3
}
// c is the only one that will be able to be used outside block `var`
