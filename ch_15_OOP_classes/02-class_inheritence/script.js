// Parent class
class Shape {
	constructor(name) {
		this.name = name
	}
	logName() {
		console.log('Shape name ' + this.name)
	}
}

// Sub class
class Rectangle extends Shape {
	constructor(name, width, height) {
		super(name)
		this.height = height
		this.width = width
	}
}

class Circle extends Shape {
	constructor(name, radius) {
		super(name)
		this.radius = radius
	}

	logName() {
		console.log('Circle name ' + this.name)
	}
}

const rect = new Rectangle('Rect1', 20, 21)
console.log(rect)
rect.logName()
const cir = new Circle('MyCir', 90)
cir.logName()

console.log(rect instanceof Shape)
console.log(rect instanceof Rectangle)
