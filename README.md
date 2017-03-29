# map-filter

When you need to run `map` and `filter` together (*aka elegant reduce*).

## Why

I've seen code that looks like:

``` js
let list = [
  {name: 'alex', age: 28},
  {name: 'frank', age: 28},
  {name: 'joe', age: 30},
  {name: 'ayham', age: 28},
  {name: 'solomon', age: 29},
]

list.filter(p => p.age < 30).map(p => {name: p.name}) // youngsters!
```

Whereas you can achieve much better performance with a simple
`reduce`:

``` js
list.reduce((acc, p) => {
  if (p.age < 30) {
    acc.push({name: p.name})
  }

  return acc
}, [])
```

No trust? Check yourself:

```
~/projects/js-map-filter (master ✘)✹✭ ᐅ node bench.js                                                                                                                                                                              0s
filter + map: 23.794ms
reduce: 6.143ms
filter-map module: 15.657ms
```

## So what does this guy do?

This utility lets you do the same things you'd do with a reduce,
without having to keep track of the accumulator:

``` js
const mapFilter = require('map-filter')

filterMap(list, p => {
  if (p.age < 30) {
    return {name: p.name}
  }
})
```

## Tests

Just `mocha` it:

```
~/projects/js-map-filter (master ✘)✹✭ ᐅ mocha                                                                                                                                                                                      1s


  mapFilter
    ✓ should be able to return all original values if no fn is specified
    ✓ should be able to exclude values
    ✓ should be able to map values
    ✓ should be able to handle falsey values


  4 passing (9ms)
```
