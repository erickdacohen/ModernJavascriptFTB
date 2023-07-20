function Rectangle(name, width, height) {
	this.name = name
	this.width = width
	this.height = height
	this.area = function () {
		return this.width * this.height
	}
}

const rect1 = new Rectangle('Rectangle 1', 20, 20)
const rect2 = new Rectangle('Rectangle 2', 20, 30)

// can add a new property
rect1.color = 'red'
rect2.perimeter = () => 2 * (rect2.width + rect2.height)
console.log(rect1)
console.log(rect2.perimeter())

// delete property
delete rect2.area

// Check for property
console.log(rect2.hasOwnProperty('area'))

// get keys
console.log(Object.keys(rect1))

// get values
console.log(Object.values(rect1))

// Get entries (pairs)
console.log(Object.entries(rect1))

for (let [key, values] of Object.entries(rect1)) {
	console.log(`key: ${key} -- value: ${values}`)
}
