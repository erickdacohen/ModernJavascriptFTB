const rectangle = {
	name: 'rectangle 1',
	width: 10,
	height: 10,
	area: function () {
		return this.height * this.width
	},
}

const rectangle2 = {
	name: 'rectangle 2',
	width: 240,
	height: 50,
	area: function () {
		return this.height * this.width
	},
}

console.log(rectangle.area())
