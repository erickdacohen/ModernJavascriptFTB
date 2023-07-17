function curSuccess(pos) {
	const coords = pos.coords
	console.log(`Lat: ${coords.latitude}`)
	console.log(`Long: ${coords.longitude}`)
	console.log(`Acc: ${coords.accuracy}`)
}

function curError(err) {
	console.log(`Error: ${err.code} - ${err.message}`)
}

const options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0,
}

navigator.geolocation.getCurrentPosition(curSuccess, curError, options)
