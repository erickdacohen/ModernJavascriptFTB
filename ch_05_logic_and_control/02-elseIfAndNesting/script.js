const d = new Date(10, 30, 2022, 15, 0, 0)
const hour = d.getHours()
console.log(hour)

if (hour < 12) {
	console.log('Good morning')
} else if (hour < 18) {
	console.log('Good afternoon.')
} else {
	console.log('Good night')
}

// nested if
if (hour < 12) {
	console.log('Good morning')
	if (hour === 6) {
		console.log('WAKE UP!')
	}
} else if (hour < 18) {
	console.log('Good afternoon.')
} else {
	console.log('Good night')
	if (hour >= 22) {
		console.log('go to sleep')
	}
}

if (hour > 7 && hour < 18) {
	console.log('gotoworkgotoworkgotowork')
}

if (hour === 6 || hour === 22) {
	console.log('Brush teeth')
}
