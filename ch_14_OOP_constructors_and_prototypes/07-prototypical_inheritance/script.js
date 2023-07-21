function Shape(name) {
	this.name = name
}

Shape.prototype.logName = function () {
	console.log('Shape Name: ' + this.name)
}

function Rectangle(name, height, width) {
	Shape.call(this, name)
	this.height = height
	this.width = width
}

Rectangle.prototype = Object.create(Shape.prototype)

const rect = new Rectangle('Rectangle1', 20, 20)
rect.logName()
console.log(rect)

function Circle(name, radius) {
	Shape.call(this, name)
	this.radius = radius
}

const circle = new Circle('Circle1', 10)
console.log(circle)
