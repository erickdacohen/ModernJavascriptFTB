/* Number challenge:
Create a variable `x` that is a random number between 1 and 100 & a variable `y` that is a random number between 1 and 50. Then output the sum, difference, product, quotient, and remainder for x and y
*/

let x = Math.floor(Math.random() * 100 + 1)
let y = Math.floor(Math.random() * 50 + 1)

console.log(`x: ${x}`)
console.log(`y: ${y}`)
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
