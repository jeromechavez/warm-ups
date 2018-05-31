function createElement (tagName, attributes, children) {
  var $parentElement = document.createElement(tagName)
  for (var key in attributes) {
    $parentElement.setAttribute(key, attributes[key])
  }

  for (var i = 0; i < children.length; i++) {
    if (children[i] instanceof Node) {
      $parentElement.appendChild(children[i])
    }
    else {
      // var $newTextNode = Object.
      $parentElement.appendChild($newTextNode)
    }
  }

  return $parentElement
}
