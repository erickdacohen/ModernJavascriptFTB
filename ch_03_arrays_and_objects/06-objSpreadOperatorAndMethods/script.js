obj1 = { a: 1, b: 2 }
obj2 = { c: 3, d: 4 }

// combine properties of obj1 and obj2 into one obj
obj3 = { ...obj1, ...obj2 }

console.log(obj3)

// before spread operator:
obj4 = Object.assign({}, obj1)
console.log(obj4)

// array of object
const todos = [
	{ id: 1, name: 'Buy Milk' },
	{ id: 2, name: 'Pay bill' },
	{ id: 3, name: 'Take out trash' },
]

console.log(todos)
