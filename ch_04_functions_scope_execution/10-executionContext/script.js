/* 
JavaScript is a single threaded, syncronous language (executed line-by-line) 
Will also contain lesson 11
*/

const x = 100
const y = 50
function getSum(n1, n2) {
	const sum = n1 + n2
	return sum
}
const sum1 = getSum(x, y)
const sum2 = getSum(5, 10)
console.log(sum1, sum2)
