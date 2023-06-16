// When key and value are the same
const name = 'myName'
const age = 50

// const person = {
// 	name: name,
// 	age: age,
// }
// equivilant to what is above
const person = {
	name,
	age,
}

console.log(person.age)

// destructuring
const todo = {
	id: 1,
	title: 'Take out trash',
}

// to get a property in a variable you could
const myId = todo.id
console.log(myId)

// or you could destructure
const { id } = todo
console.log(id)

// destructure various layers
const otherTodo = {
	otherId: 2,
	otherTitle: 'code',
	user: {
		userName: 'myName',
		userId: '7',
	},
}

const {
	otherId: secondId, // used to rename as you destructure
	otherTitle,
	user: { userName },
} = otherTodo
console.log(userName)

// Can also destructure arrays
const numbers = [0, 22, 42, 67, 76]
const [first, second, ...rest] = numbers
console.log(first, second, rest)
