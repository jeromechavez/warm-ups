function deepCopy(input) {
  if (input instanceof Date) {
    let date = new Date(input.getTime())
    return date
  }
  if (Array.isArray(input)) {
    return input.map(deepCopy)
  }
  if (input instanceof Object) {
    let obj = {}
    for (var keys in input) {
      obj[keys] = deepCopy(input[keys])
    }
    return obj
  }
  return input
}
