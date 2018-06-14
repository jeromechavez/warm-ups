function indexOf(string, substring) {
  if (substring === ''){
    return 0
  }

  if (substring.length > 1) {
    if (string.includes(substring)) {
      for (var i = 0; i < string.length; i++) {
        if (string[i] === substring[0]) {
          if (string[i+1] === substring[1]) {
            return i
          }
        }
      }
    }
  }
  if (string.includes(substring)) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === substring[0]) {
        return i
      }
    }
  }
  else {
    return -1
  }
}
