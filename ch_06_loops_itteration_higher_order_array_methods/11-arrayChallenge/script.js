/*
Take the given `people` array and return an array of `youngPeople` 
that stores only their names and emails. age < 25
*/

const people = [
	{
		firstName: 'Homer',
		lastName: 'Simpson',
		email: 'homer@gmail.com',
		phone: '+1-111-111-1111',
		age: 48,
	},
	{
		firstName: 'Derick',
		lastName: 'Doe',
		email: 'derick@gmail.com',
		phone: '+2-222-222-2222',
		age: 42,
	},
	{
		firstName: 'Zack',
		lastName: 'Smith',
		email: 'zs@gmail.com',
		phone: '+3-333-333-3333',
		age: 19,
	},
	{
		firstName: 'Lisa',
		lastName: 'Simpson',
		email: 'lisa@gmail.com',
		phone: '+1-222-111-1111',
		age: 11,
	},
	{
		firstName: 'Bart',
		lastName: 'Simpson',
		email: 'eatmyshorts@gmail.com',
		phone: '+1-222-333-1231',
		age: 9,
	},
	{
		firstName: 'Seemor',
		lastName: 'Skinner',
		email: 'seem@yahoo.com',
		phone: '+1-555-111-1111',
		age: 52,
	},
]

const youngPeople = people
	.filter((person) => {
		return person.age < 25
	})
	.map((youngPerson) => {
		return {
			name: youngPerson.firstName + ' ' + youngPerson.lastName,
			email: youngPerson.email,
		}
	})

console.log(youngPeople)

/*
Add all the positive numbers in the array 
*/
const numbers = [2, -30, 50, 20, -13, -9, 7]
const summedNums = numbers
	.filter((num) => num > 0)
	.reduce((arr, curr) => arr + curr)

console.log(summedNums)

/*
create a new array called `capitalizedWords` that returns the first
letter of each word in the array capitalized
*/

const words = ['coder', 'programmer', 'developer']

const capitalizedWords = words.map((word) => {
	return word[0].toUpperCase() + word.slice(1)
})

console.log(capitalizedWords)
