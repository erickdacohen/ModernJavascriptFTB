for (let i = 0; i <= 20; i++) {
	if (i === 15) {
		console.log('breaking...')
		break
	}
	console.log(i)
}

for (let i = 0; i <= 20; i++) {
	if (i === 12) {
		console.log('skipping...')
		continue
	}
	console.log(i)
}
