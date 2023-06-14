const arr = [23, 42, 55, 93, 99]

// add a value to the end of an array
arr.push(100)
// remove a value from the end of an array
arr.pop()
// add a value to the beginning of an array
arr.unshift(14)
// remove a value from the beginning of an array
arr.shift()
// reverse the array
// arr.reverse()

console.log(arr)

let x
// check if a value is in an array
x = arr.includes(23)
// get the index of a given value
x = arr.indexOf(55)

// slice and splice
// slice returns a sub array while splice manipulates the original array
x = arr.slice(1, 4)
// x = arr.splice(2, 4)

// chaining methods
x = arr.splice(1, 4).reverse().toString()

console.log(x)
