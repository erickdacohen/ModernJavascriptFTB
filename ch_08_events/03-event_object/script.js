const logo = document.querySelector('img')

function onClick(e) {
	console.log(e.target)
	// console.log(e.currentTarget)
	console.log(e.type) // type of event
	console.log(e.timeStamp)
}

logo.addEventListener('click', onClick)

// document.body.addEventListener('click', function (e) {
// 	console.log(e.target) // what was clicked
// 	console.log(e.currentTarget) // where the eventListener is (body)
// })

function onDrag(e) {
	document.querySelector('h1').textContent = `X: ${e.clientX} Y: ${e.clientY}`
}
logo.addEventListener('drag', onDrag)
