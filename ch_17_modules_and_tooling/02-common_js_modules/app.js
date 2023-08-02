// const message = require('./utils')
// console.log(message.text)

const { capitalizeWords, makeMoney } = require('./utils')
const Person = require('./Person')

console.log(capitalizeWords('hello world'))
console.log(makeMoney(9))

person1 = new Person('Bob', 22)
person1.greet()
