/* 
Create a function called `getCelcius()` that takes a temperature in 
Farenheit & returns the temp in celcius
 */
function getCelcius(f) {
	return ((f - 32) * 5) / 9
}
// const getCelcius = (f) => (f - 32) * 5) / 9
console.log(`The temp is ${getCelcius(32)}\xB0`)
console.log(`The temp is ${Math.round(getCelcius(100))}\xB0`)

/*
Create an arrow function called `minMax()` that takes in array of numbers and returns an object with the minimum & max numbers in the array
*/
const minMax = (arr) => ({
	min: Math.min(...arr),
	max: Math.max(...arr),
})

console.log(minMax([1, 2, 3, 4, 5]))
/* Create an IIFE that takes in the length and width of a rectangle and outputs the message to the console as soon as the page loads */
;(function (l, w) {
	const a = l * w
	console.log(`the area of a rec with len ${l} and width ${w} is ${a}`)
})(2, 4)
