// New constructor function usually start with capital letter
function Rectangle(name, width, height) {
	this.name = name
	this.width = width
	this.height = height
	this.area = function () {
		return this.width * this.height
	}
}

const rect1 = new Rectangle('Rectangle1', 10, 120)
const rect2 = new Rectangle('Rectangle2', 20, 20)
const rect3 = new Rectangle('Rectangle3', 30, 30)

console.log(rect1, rect1.area())

// get the constructor function
console.log(rect2.constructor)
console.log(rect3 instanceof Rectangle)
