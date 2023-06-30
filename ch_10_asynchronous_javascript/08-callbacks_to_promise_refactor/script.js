// function toggle(e) {
// 	e.target.classList.toggle('danger')
// }

// document.querySelector('button').addEventListener('click', toggle)

const posts = [
	{ title: 'post one', body: 'This is post one' },
	{ title: 'post two', body: 'This is post two' },
]

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let error
			if (!error) {
				posts.push(post)
				resolve()
			} else {
				reject('Err...')
			}
		}, 2000)
	})
}

function getPosts() {
	setTimeout(() => {
		posts.forEach((post) => {
			const div = document.createElement('div')
			div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
			document.querySelector('#posts').appendChild(div)
		})
	}, 1000)
}

function showErr(err) {
	h3 = document.createElement('h3')
	h3.innerHTML = `<strong>${err}</strong>`
	document.getElementById('posts').appendChild(h3)
}

createPost({ title: 'post three', body: 'This is post three' })
	.then(getPosts)
	.catch(showErr)
