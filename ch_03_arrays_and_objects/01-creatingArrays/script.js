// Array literal
const numbers = [10, 5, 15, 22, 18, 19]
console.log(numbers)

// Array constructor
const fruits = new Array('orange', 'banana', 'kiwi')
console.log(fruits)

// accessing, zero based index.
let x = fruits[0]

// get length of an array
x = numbers.length

// arrays are mutable
fruits[2] = 'pear'

// to add at the end
fruits[fruits.length] = 'strawberry'

console.log(fruits)
