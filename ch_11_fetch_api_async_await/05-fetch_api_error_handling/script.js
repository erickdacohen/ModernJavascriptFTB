fetch('http://httpstat.us/404')
	.then((res) => {
		if (!res.ok) {
			throw new Error('request failed')
		}
		// console.log(res.status)
		return res
	})
	.then(() => console.log('success'))
	.catch((error) => console.log(error))
