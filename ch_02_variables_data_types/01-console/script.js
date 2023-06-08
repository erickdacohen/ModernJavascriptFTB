// Print to the console
console.log(100)
console.log('Hello, world!')

// Print warnings and errors
console.error('This is an error example')
console.warn('This is an warn example')

// log objects as tables
console.table({ name: 'Erick', yearsExp: 5 })

// Group output print together
console.group('My Group')
console.log('I am in the group.')
console.warn('You are leaving the group area!')
console.groupEnd()

// You can also add styles to the console!
const styles = 'padding: 10px; background-color: #fff; color: #111'
console.log('%cI am a special styled messsage', styles)
