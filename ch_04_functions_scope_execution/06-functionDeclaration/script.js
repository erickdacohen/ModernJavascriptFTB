// function declaration
console.log(addDollarSign(1)) // can use function that was declared after
function addDollarSign(value) {
	return '$' + value
}

// function expression
const addPlusSign = function (value) {
	return '+' + value
}

console.log(addPlusSign(2))
