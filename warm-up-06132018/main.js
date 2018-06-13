function padLeft(string, padding, maxLength) {
  var padded = ''
  var i = 0
  if (string.length >= maxLength) {
    return string
  }
  else {
    if (padding.length > 1) {
      while (padded.length < (maxLength - string.length)) {
        for (var i = 0; i < padding.length; i++) {
          if (padded.length < (maxLength - string.length)) {
            padded += padding[i]
          }
        }
      }
    }
    else {
      do {
        padded += padding
      } while (padded.length < (maxLength - string.length))
    }
  }
  padded += string
  return padded
}

function padRight(string, padding, maxLength) {
  if (string.length >= maxLength) {
    return string
  }
  else {
    if (string.length > 1) {
      while (string.length < (maxLength)) {
        for (var i = 0; i < padding.length; i++) {
          if (string.length < (maxLength)) {
            string += padding[i]
          }
        }
      }
    }
    else {
      do {
        string += padding
      } while (string.length < (maxLength))
    }
  }
  return string
}
