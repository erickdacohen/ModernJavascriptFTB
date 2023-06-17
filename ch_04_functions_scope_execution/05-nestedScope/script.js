function first() {
	const x = 1
	function second() {
		const y = 2
		console.log(x + y)
	}
	second()
	// console.log(y) <- would throw err
}
first()
// same for if statements
