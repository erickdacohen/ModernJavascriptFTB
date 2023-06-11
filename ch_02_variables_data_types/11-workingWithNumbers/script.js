let x

const num = new Number(5)

// changing number to string
x = num.toString()
// getting the number of digits in the number, chain
x = num.toString().length
// specifying the amount of decimal points as string
x = num.toFixed(2)
// for significant digits
x = num.toPrecision(4)

// Number object
x = Number.MAX_VALUE
x = Number.MIN_VALUE
console.log(x)
