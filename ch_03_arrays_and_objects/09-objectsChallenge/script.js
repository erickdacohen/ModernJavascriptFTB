/* Objects Challenge
1. Create an array of objects called `library`. Add three objects with properties `title`, `author`, and `status`. `title` and `author` should be strings and `status` should be another object with the properties of `own`, `reading`, and `read` which should all be boolean values. For all set `own` to true and rest to false 
*/
const library = [
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Farenheit 451',
		author: 'Ray Bradbury',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
	{
		title: 'Multivariable Calculus 5th Edition',
		author: 'Dan Clegg',
		status: {
			own: true,
			reading: false,
			read: false,
		},
	},
]

/* 2. Set all the read values to `true` */
// did not cover forEach yet
library.forEach((book) => (book.status.read = true))

// so we do it naively
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library)

/* Destructure the title from the first book and rename the variabel firstBook */
const { title: firstBook } = library[0]
console.log(firstBook)

/* Turn the library object into a JSON string */

const libJSON = JSON.stringify(library)
console.log(libJSON)
