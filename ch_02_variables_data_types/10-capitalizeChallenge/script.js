/*
Challenge. Capitalize the first letter of the word in the string.
*/

const myString = 'developer'
let myNewString = myString.charAt(0).toUpperCase() + myString.substring(1)

console.log(myNewString)
