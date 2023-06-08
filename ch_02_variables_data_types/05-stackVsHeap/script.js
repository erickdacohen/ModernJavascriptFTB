// Values stored on the stack
const name = 'Tina'
const countryCode = 1

// Reference values stored on the heap
const Person = {
	name: 'Bob',
	countryCode: 34,
}

let newName = name
newName = 'Louise'

console.log(name, newName)

// both are stored in the same area in the heap
let newPerson = Person
newPerson.name = 'Teddy'
console.log(Person, newPerson)
