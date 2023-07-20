const strLit = 'Hello'
const strObj = new String('Hello')

console.log(strLit, typeof strLit)
console.log(strObj, typeof strObj)

// Boxing adding a wrapper object around primative string lit
console.log(strLit.toLocaleUpperCase())
console.log(strLit[0])

// Unboxing
console.log(strObj.valueOf())
