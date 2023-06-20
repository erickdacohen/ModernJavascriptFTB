/* 
log numbers 1-100
For multiples of 3 print fizz instead of the number
For multiples of 5 print buzz instead of the number 
For numbers that are multiples of both 3 & 5 print fizzbuzz
*/
for (let i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('fizzbuzz')
	} else if (i % 3 === 0) {
		console.log('fizz')
	} else if (i % 5 === 0) {
		console.log('buzz')
	} else {
		console.log(i)
	}
}
