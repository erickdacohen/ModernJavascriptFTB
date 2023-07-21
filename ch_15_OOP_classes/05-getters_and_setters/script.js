class Person {
	constructor(firstName, lastName) {
		this._firstName = firstName // _firstName notation for non access
		this._lastName = lastName
	}

	get firstName() {
		return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1)
	}

	set firstName(value) {
		this._firstName = value.charAt(0).toUpperCase() + value.slice(1)
	}
}

const person1 = new Person('john', 'doe')

person1.firstName = 'joe'
console.log(person1.firstName)
