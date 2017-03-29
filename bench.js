const filterMap = require('./index.js')
let list = [
  {name: 'alex', age: 28},
  {name: 'frank', age: 28},
  {name: 'joe', age: 30},
  {name: 'ayham', age: 28},
  {name: 'solomon', age: 29},
]

console.time('filter + map')
for (let x = 0; x < 10000; x++) {
  list.filter(p => p.age < 30).map(p => {name: p.name})
}
console.timeEnd('filter + map')

console.time('reduce')
for (let x = 0; x < 10000; x++) {
  list.reduce((acc, p) => {
    if (p.age < 30) {
      acc.push({name: p.name})
    }

    return acc
  }, [])
}
console.timeEnd('reduce')

console.time('map-filter module')
for (let x = 0; x < 10000; x++) {
  filterMap(list, p => {
    if (p.age < 30) {
      return {name: p.name}
    }
  })
}
console.timeEnd('map-filter module')
