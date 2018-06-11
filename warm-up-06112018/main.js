function firstChar(string) {
  return string[0]
}

function lastChar(string) {
  return string[string.length - 1]
}

function repeat(string, number) {
  var repeated = ''
  for (var i = 0; i < number; i ++) {
    repeated += string
  }
  return repeated
}

function ransomeCase(string) {
  var newString = ''
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string.charAt(i).toUpperCase(i)
    }
    else {
      newString += string.charAt(i)
    }
  }
  return newString
}

function reverse(string) {
  var reversedString = ''
  for (var i = 0; i < string.length; i++) {
    reversedString += string.charAt(string.length - 1 - i)
  }
  return reversedString
}

function capitalize(string) {
  var newString = ''
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string.charAt(i).toUpperCase(i)
    }
    else {
      newString += string.charAt(i).toLowerCase(i)
    }
  }
  return newString
}
