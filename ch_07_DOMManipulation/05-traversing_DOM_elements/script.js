/* Any HTML tag is an element 
Nodes & their properties
*/
let output
// Get child elements
const parent = document.querySelector('.parent')

output = parent.children
output = parent.children[0].innerText
output = parent.children[0].className
output = parent.children[0].nodeName

parent.children[1].innerText = 'Child Two'
parent.children[1].style.color = 'red'

parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

// get parent elements from a child
const child = document.querySelector('.child')

output = child.parentElement
child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '10px'

// sibling elements
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.nextElementSibling

secondItem.nextElementSibling.style.color = '#aaa'
console.log(output)
