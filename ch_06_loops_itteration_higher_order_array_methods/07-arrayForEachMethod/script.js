// Higher order array methods take in functions as arguments. Called 'callback' functions.

const socials = ['Facebook', 'Instagram', 'Whatsapp', 'Twitter', 'LinkedIn']
// console.log(socials.__proto__)
// socials.forEach(function (s) {
// 	console.log(s)
// })
socials.forEach((s) => console.log(s))

const socialObjs = [
	{ name: 'Facebook', url: 'https://facebook.com' },
	{ name: 'Instagram', url: 'https://instagram.com' },
	{ name: 'Twitter', url: 'https://twitter.com' },
	{ name: 'LinedIn', url: 'https://linedin.com' },
]

socialObjs.forEach((item) => console.log(item.url))
