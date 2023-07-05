// try {
// 	console.log(x)
// } catch (error) {
// 	console.log('Error: ' + error)
// }

function double(num) {
	if (isNaN(num)) {
		throw new Error(num + ' is not a number.')
	}
	return num * 2
}

try {
	const y = double('asd')
	console.log(y)
} catch (error) {
	console.log(error)
}
