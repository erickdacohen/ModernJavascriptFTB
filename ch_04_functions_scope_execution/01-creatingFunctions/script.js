// Multiple ways to define a function
function sayHello() {
	console.log('Hello world!')
}

// must invoke the function
sayHello()
// can pass arguments into a function
function add(num1, num2) {
	console.log(num1 + num2)
}
add(2, 3)

// functions can and usually return values
function subtract(num1, num2) {
	return num1 - num2
	/* returning exits the function 
     so if we were to print anything below
     it doesn't get executed
     */
	console.log('I will not print')
}

subtract(3, 2)
const result = subtract(10, 2)
