function startsWith(string, substring) {
  for (var i = 0; i < substring.length; i++) {
    if (string[i] !== substring[i]) {
      return false
    }
  }
  return true
}

function endsWith(string, substring) {
  for (var i = 0; i < substring.length; i++) {
    if (string[string.length-1-i] !== substring[substring.length - 1 -i]) {
      return false
    }
  }
  return true
}
