// Data Types

/*
Primative Types: stored in the stack 
1. Strings -- sequence of characters enclosed in quotes or backticks 
2. Numbers -- Integers and floats
3. Booleans -- true or false
4. Null -- Intentional absence of a value
5. Undefined -- A variable that has not yet been defined / assigned 
6. Symbol -- Built in object whose constructor returns a unique symbol
7. BigInt -- larger int values than Number
*/

// string
const firstName = 'Erick'
console.log(firstName, typeof firstName)

// number
const myNum = 10
const myOtherNum = 99.99
console.log(myNum, typeof myNum, myOtherNum, typeof myOtherNum)

// boolean
const isGood = true
console.log(isGood, typeof isGood)

// null
const myNullVal = null
console.log(myNullVal, typeof myNullVal)

// undefined
let score
console.log(score, typeof score)

// symbol
const id = Symbol('id')
console.log(id, typeof id)

// BigInt
const myBigNum = 139849829480n
console.log(myBigNum, typeof myBigNum)

/*
Reference Types: stored in the heap
1. Arrays 
2. Objects
3. Functions
*/

// Arrays
const myNums = [0, 1, 2, 3, 4]
console.log(myNums, typeof myNums)

// Objects
const Person = {
	name: 'Dave',
}
console.log(Person, typeof Person)

// Functions
function greet() {
	console.log('Hi!')
}
console.log(greet, typeof greet)
