/**
 * Methods available on the class itself are static methods
 * Doesn't need to be on an instance
 */

class Rectangle {
	constructor(name, height, width) {
		this.name = name
		this.height = height
		this.width = width
	}
	area() {
		return this.height * this.width
	}

	static getClass() {
		return 'Rectangle'
	}
}

const rect = new Rectangle('myRectangle', 10, 10)
console.log(rect.area())
console.log(Rectangle.getClass())
