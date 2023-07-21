function Rectangle(name, width, height) {
	this.name = name
	this.width = width
	this.height = height
}

Rectangle.prototype.area = function () {
	return this.width * this.height
}

Rectangle.prototype.perimeter = function () {
	return 2 * (this.width + this.height)
}

Rectangle.prototype.isSquare = function () {
	return this.width === this.height
}

const rect1 = new Rectangle('rectangle1', 20, 40)

// console.log(Object.getPrototypeOf(rect1))
console.log(rect1)
