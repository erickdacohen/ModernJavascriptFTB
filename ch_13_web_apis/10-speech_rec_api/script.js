const SpeechRecongintion =
	window.SpeechRecognition || window.webkitSpeechRecognition

const rec = new SpeechRecongintion()

rec.lang = 'en-US'
rec.continuous = false

rec.onresult = function (e) {
	const acceptedColors = [
		'red',
		'green',
		'blue',
		'white',
		'grey',
		'yellow',
		'purple',
		'orange',
		'brown',
		'pink',
	]
	for (let i = e.resultIndex; i < e.results.length; i++) {
		const script = e.results[i][0].transcript.toLowerCase().trim()
		if (acceptedColors.includes(script)) {
			document.body.style.backgroundColor = script
		} else {
			alert('Please say a color')
		}
	}
}

rec.start()
