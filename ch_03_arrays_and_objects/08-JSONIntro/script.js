/*
Difference between JSON and Objects
JSON needs quotes around values

public github API : https://api.github.com/users
*/

const post = {
	id: 1,
	title: 'Post One',
	body: 'This is the post',
}
console.log(post)

// convert to JSON string
const postStr = JSON.stringify(post)
console.log(postStr)

// parse JSON
const postObj = JSON.parse(postStr)
console.log(postObj)
