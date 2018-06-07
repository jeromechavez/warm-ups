var queryString = {
  parse(string) {
    var obj = {}
    var newString = string.slice(1)
    var pairs = newString.split("&")
    for (var i = 0; i < pairs.length; i++) {
      var split = pairs[i].split("=")
      obj[split[0]] = split[1]
    }
    return obj
  },
  stringify(object) {
    return '?' +Object.keys(object).map(key => key + '=' + object[key]).join('&');
  }
}
