console.log(100 > 5 && 5 > 100)
console.log(100 > 5 || 5 > 100)

// && will return the first falsy value or last value
let a

a = 10 && 20 // 20
a = 10 && 20 && 30 // 30
a = 0 && 20 && 30 // 0
console.log(a)

const posts = []
posts.length && console.log(posts[0])

// || will return the first truthy value or last value
let b

b = 10 || 20 // 10
b = 10 || 20 || 30 // 10
b = 0 || 20 || 30 // 20
console.log(b)

// ?? returns the right side of the operand when the left is null or undefinded
let c
c = 10 ?? 20 // 10
c = '' ?? 20 // ''
c = null ?? 20 // 20
console.log(c)
