function Person(firstName, lastName) {
	this._firstName = firstName
	this._lastName = lastName

	Object.defineProperty(this, 'firstName', {
		get: function () {
			return this.capitalizeFirst(this._firstName)
		},
		set: function (value) {
			this._firstName = value
		},
	})

	Object.defineProperty(this, 'lastName', {
		get: function () {
			return this.capitalizeFirst(this._lastName)
		},
		set: function (value) {
			this._lastName = value
		},
	})
}

Person.prototype.capitalizeFirst = function (value) {
	return value.charAt(0).toUpperCase() + value.slice(1)
}

const person1 = new Person('john', 'doe')
console.log(person1.firstName)
console.log(person1.lastName)
