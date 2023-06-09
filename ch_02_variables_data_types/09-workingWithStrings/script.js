let x

const name = 'Homer'
const food = 'donuts'
x = 'Hello, my name is ' + name + ' and I like to eat ' + food

// using template literalls
x = `Hello, my name is ${name} and I like to eat ${food}`

// string properties and methods
const s = 'Hello world'

x = s.length // this is a property, not a method so no ()

// Access value by index
x = s[0]

x = s.__proto__

x = s.toUpperCase()

x = s.charAt(0) // also getting by index
x = s.indexOf('e')

x = s.substring(3, 7)
x = s.slice(3, 7)

x = s.trim() // trims whitespace on the ends

// replace
x = s.replace('world', 'Dave')
// check if substring is in the string
x = s.includes('llo')
// split into an array

x = s.split(' ')

console.log(x)
