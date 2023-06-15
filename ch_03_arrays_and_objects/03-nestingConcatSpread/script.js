const fruits = ['orange', 'pear', 'apple']
const berries = ['strawberyy', 'raspberry', 'blueberry']

fruits.push(berries)

console.log(fruits)

let x
// get bluberry
x = fruits[3][2]
console.log(x)

const allFruits = [fruits, berries]
console.log(allFruits)

// get strawberry from the array of arrays
x = allFruits[1][0]
console.log(x)

// concatinating puts the items of one array into another
fruits.pop()

x = fruits.concat(berries)
console.log(x)

// spread operator is like concat (...)
x = [...fruits, ...berries]

// Flatten arrays
const nestedArray = [0, 1, [2, 3, 4], [5, 6]]

x = nestedArray.flat()
console.log(x)

// Static methods
x = Array.isArray(fruits)
x = Array.from('12345678')

const a = 1
const b = 2
const c = 3
x = Array.of(a, b, c)

console.log(x)
