/*
Create a function called `calculator()` that takes three parameters.
`num1`, `num2`, and `operator` where the `operator` can be one of the 
following (+, -, *, /). The function should return the result of the 
calculation, if anything other than the operators are passed in, the 
function should return an error message.
*/

function calculator(num1, num2, operator) {
	let res
	switch (operator) {
		case '+':
			res = num1 + num2
			break
		case '-':
			res = num1 - num2
			break
		case '*':
			res = num1 * num2
			break
		case '/':
			res = num1 / num2
		default:
			res = 'Operator not found.'
			break
	}
	return res
}
console.log(calculator(2, 4, 'f*'))
