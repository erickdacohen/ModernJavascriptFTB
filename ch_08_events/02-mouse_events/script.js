const h1 = document.querySelector('h1')

const onClick = () => console.log('clicked')
const onDblClick = () => console.log('double clicked')
const onRightClick = () => {
	h1.style.background = 'papayawhip'
}
const onMouseDown = () => console.log('mouse Down')
const onMouseUp = () => console.log('mouse up')
const onWheel = () => console.log('wheeeeel')
const onMouseOver = () => console.log('mouse in')
const onMouseOut = () => console.log('mouse out')
const onDragStart = () => console.log('drag start')
// event listeners
h1.addEventListener('click', onClick)
h1.addEventListener('dblclick', onDblClick)
h1.addEventListener('contextmenu', onRightClick)
h1.addEventListener('mousedown', onMouseDown)
h1.addEventListener('mouseup', onMouseUp)
h1.addEventListener('wheel', onWheel)
h1.addEventListener('mouseover', onMouseOver)
h1.addEventListener('mouseout', onMouseOut)
h1.addEventListener('dragstart', onDragStart)
