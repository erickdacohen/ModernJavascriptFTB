const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'my-element')

// div.innerText = 'Hello, world'

const text = document.createTextNode('Hello, world')
div.appendChild(text)
console.log(div)

// document.body.appendChild(div)
document.querySelector('ul').appendChild(div)
