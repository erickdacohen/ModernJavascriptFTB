for (let i = 0; i <= 5; i++) {
	console.log('i is ' + i)
}

// you can nest loops
for (let i = 1; i <= 10; i++) {
	console.log('i is ' + i)
	for (let j = 1; j <= 10; j++) {
		console.log(`${i} * ${j} = ${i * j}`)
	}
}

// possible to loop through array (but there is higher order method)
const cities = ['Miami', 'District of Columbia', 'New York', 'San Fransisco']
for (let i = 0; i < cities.length; i++) {
	console.log(cities[i])
	if (cities[i] === 'San Fransisco') {
		console.log('West coast')
	}
}
