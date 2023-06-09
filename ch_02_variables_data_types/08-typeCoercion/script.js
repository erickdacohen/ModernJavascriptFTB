let y
y = 5 + '5' // string 55
y = 5 + Number('5') // number 10
y = 5 * '5' // number 25
y = 5 + null // number 5
y = 5 + true // number 6; true as a number is 1
console.log(y, typeof y)
