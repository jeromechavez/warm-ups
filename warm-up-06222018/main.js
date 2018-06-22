function createDOM(tagName) {

  const $element = document.createElement(tagName)

  return {
    element: function () {
      return $element
    },
    attribute: function (name, value) {
      $element.setAttribute(name, value)
      return this
    },
    text: function (value) {
      $element.textContent = value
      return this
    },
    child: function (tagName) {
      var newElement = createDOM(tagName)
      $element.appendChild(newElement.element())
      return newElement
    }
  }

}
