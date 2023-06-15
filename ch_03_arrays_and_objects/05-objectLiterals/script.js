const person = {
	name: 'John Doe',
	age: 30,
	isAdmin: true,
	address: {
		street: '123 Main ST',
		city: 'Miami',
		state: 'FL',
	},
	hobbies: ['coding', 'games', 'cooking'],
}

console.log(person)

let x
// dot or bracket notation to access an obj property
x = person.name
x = person['age']

// object within object; access city
x = person.address.city

x = person.hobbies[2]

// can update
person.name = 'Jane Doe'
person['isAdmin'] = false
console.log(x)

// to remove a property
delete person.age
// add property
person.hasKids = false

// add functions to object (will cover functions later)
person.greet = function () {
	console.log(`Hello, my name is ${this.name}`) // use `this` to access property in object
}

person.greet()
console.log(person)
