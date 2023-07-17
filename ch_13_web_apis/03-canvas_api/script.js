const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')

// Draw Rectangle
ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 150, 100)

// Draw Circle
ctx.fillStyle = 'steelblue'
ctx.arc(300, 300, 100, 0, Math.PI * 2)
ctx.fill()

// Draw lines
ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.lineWidth = 5
ctx.moveTo(10, 10)
ctx.lineTo(300, 300)
ctx.stroke()

// Draw text
ctx.font = '30px Arial'
ctx.fillStyle = 'blue'
ctx.fillText = ('Hello, world!', 300, 100, 300)
