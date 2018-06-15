function includes(string, substring) {
  for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + substring.length) === substring) {
      return true
    }
  }
  return false
}
