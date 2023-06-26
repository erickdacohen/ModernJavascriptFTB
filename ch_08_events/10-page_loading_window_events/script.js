window.addEventListener('resize', () => {
	document.querySelector(
		'h1'
	).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener('scroll', () => {
	console.log(`scrolled ${window.scrollY}`)
	if (window.scrollY > 70) {
		document.body.style.backgroundColor = '#000'
		document.body.style.color = '#aaa'
	} else {
		document.body.style.backgroundColor = '#aaa'
		document.body.style.color = '#000'
	}
})
