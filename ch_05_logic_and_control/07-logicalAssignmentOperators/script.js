// ||= assigns the right side value only if the left side is falsy
let a = false
if (!a) {
	a = 10
}

// equivalent to
a = a || 10
// equivalent to
a ||= 10
console.log(a)

// &&= assigns the right side value only if the left side is truthy
let b = 10
if (b) b = 20
// equivalent to
b = b && 20
// equivalent to
b &&= 20
console.log(b)

// ??= assigns the right side value only if the left is null or undefined
let c = null
if (c === null || c === undefined) {
	c = 20
}
// equivalent to
c = c ?? 20
// equivalent to
c ??= 20
