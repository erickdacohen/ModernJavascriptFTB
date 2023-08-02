const sym = Symbol()
const sym1 = Symbol('foo')
const sym2 = Symbol('bar')

console.log(sym, sym1, sym2)
console.log(typeof sym)
console.log(sym1.description)

console.log(Symbol('sym') === Symbol('sym')) // returns false
