let x
let d = new Date()

x = d.getFullYear()
x = d.getMonth()
x = d.getDate()
x = d.getDay() // day of the week
x = d.getHours()
x = d.getMinutes()
x = d.getSeconds()

x = Intl.DateTimeFormat('en-US').format(d)
x = Intl.DateTimeFormat('es-AR').format(d)

x = d.toLocaleString('default', { month: 'short' })
console.log(x)
