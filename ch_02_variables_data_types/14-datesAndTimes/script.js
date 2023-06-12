// working with the date object
let d

d = new Date()

// create new specific date. Month is zero indexed as well
d = new Date(2020, 11, 2)
// can also add with string
d = new Date('2022-10-10') // off by a day
d = new Date('01-02-2019')

// unix timestamp

d = Date.now()

d = new Date(1686589791345)
console.log(d)
