/*
Array Challenges
1. Given the array `const arr = [0, 1, 2, 3, 4, 5]`, convert it to [6, 5, 4, 3, 2, 1, 0].
*/
const arr = [1, 2, 3, 4, 5]
arr.unshift(0)
arr.push(6)
arr.reverse()
console.log(arr)

/*
2. Given two arrays 
`const arr1 = [1, 2, 3, 4, 5]`  and `const arr2 = [5, 6, 7, 8, 9, 10]`
combine both without the extra 5
*/
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]
const x = arr1.slice(0, 4).concat(arr2)
console.log(x)
