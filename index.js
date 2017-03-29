function mapFilter(list, fn) {
  return list.reduce((acc, v) => {
    let result = fn(v)

    result && acc.push(result)
    return acc
  }, [])
}

module.exports = mapFilter
