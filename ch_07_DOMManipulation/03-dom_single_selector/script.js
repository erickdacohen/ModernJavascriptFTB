// Select single elements on a page
console.log(document.getElementById('app-title'))
console.log(document.getElementById('app-title').getAttribute('id'))

// can set attributes
// document.getElementById('app-title').id = 'new-id'
document.getElementById('app-title').title = 'shopping list'
document.getElementById('app-title').setAttribute('class', 'title')

// get change the elemenet content
const title = document.getElementById('app-title')
console.log(title.textContent)
title.textContent = 'Hello'
title.innerText = 'Hello, world!'
title.innerHTML = '<strong>Shopping List</strong>'

// Change styles
title.style.color = 'blue'

// Query selector
console.log(document.querySelector('h1')) // selects the first!
console.log(document.querySelector('#app-title'))
console.log(document.querySelector('.container'))
console.log(document.querySelector('input[type="text"]'))
console.log(document.querySelector('li:nth-child(2)').innerText) //pseudo selectors

const secondItem = document.querySelector('li:nth-child(2)')
secondItem.innerText = 'Apple Juice'

// Methods can be used on other elements besides document
const list = document.querySelector('ul')
const firstItem = list.querySelector('li')
console.log(firstItem)
firstItem.style.color = 'green'
