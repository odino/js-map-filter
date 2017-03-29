function mapFilter(list, fn) {
  return list.reduce((acc, v) => {
    let result = typeof fn === 'function' ? fn(v) : v

    result != undefined && acc.push(result)
    return acc
  }, [])
}

module.exports = mapFilter
