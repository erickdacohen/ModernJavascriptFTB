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
