const d = new Date(2022, 2, 10, 8, 0, 0)
const month = d.getMonth()

console.log(month)

switch (month) {
	case 1:
		console.log('It is Jan')
		break
	case 2:
		console.log('It is Feb')
		break
	case 3:
		console.log('It is Mar')
		break
	default:
		console.log('It is not Jan, Feb, or Mar')
}
