function renderDiv () {
  var $newDiv = document.createElement('div')
  return $newDiv
}

function renderSpan () {
  var $newSpan = document.createElement('span')
  $newSpan.textContent = 'Hello'
  return $newSpan
}

function renderInput () {
  var $newInput = document.createElement('input')
  $newInput.setAttribute('type', 'number')
  return $newInput
}

function renderButton () {
  var $newButton = document.createElement('button')
  $newButton.setAttribute('type', 'button')
  $newButton.classList.add('btn', 'btn-primary')
  $newButton.textContent = 'Primary'
  return $newButton
}

function renderBadge () {
  var $newHeader = document.createElement('h1')
  $newHeader.textContent = 'Example heading'
  var $newSpan = document.createElement('span')
  $newSpan.classList.add('badge', 'badge-secondary')
  $newSpan.textContent = 'New'
  $newHeader.appendChild($newSpan)
  return $newHeader
}

function renderListGroup () {
  var $newList = document.createElement('ul')
  $newList.classList.add('list-group')
  var list = ['Cras justo odio', 'Dapibus ac facilisis', 'Morbi leo risus', 'Porta ac consectetur ac', 'Vestibulum at eros']
  for (var i = 0; i < list.length; i++) {
    var $newListItem = document.createElement('li')
    $newListItem.classList.add('list-group-item')
    $newListItem.textContent = list[i]
    $newList.appendChild($newListItem)
  }
  return $newList
}

function renderCard () {
  var $newDiv = document.createElement('div')
  $newDiv.classList.add('card')
  $newDiv.setAttribute('style', 'width: 18rem;')

  var $newImg = document.createElement('img')
  $newImg.classList.add('card-img-top')
  $newImg.setAttribute('src', '...')
  $newImg.setAttribute('alt', 'card image cap')

  var $newSubDiv = document.createElement('div')
  $newSubDiv.classList.add('card-body')

  var $newSubHeader = document.createElement('h5')
  $newSubHeader.classList.add('card-title')
  $newSubHeader.textContent = 'Card title'

  var $newParagraph = document.createElement('p')
  $newParagraph.classList.add('card-text')
  $newParagraph.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."

  var $newAEl = document.createElement('a')
  $newAEl.setAttribute('href', '#')
  $newAEl.classList.add('btn', 'btn-primary')
  $newAEl.textContent = 'Go somewhere'

  $newSubDiv.appendChild($newSubHeader)
  $newSubDiv.appendChild($newParagraph)
  $newSubDiv.appendChild($newAEl)

  $newDiv.appendChild($newImg)
  $newDiv.appendChild($newSubDiv)
  return $newDiv
}

function renderForm () {
  var $form = document.createElement('form')

  var $div = document.createElement('div')
  $div.classList.add('form-group')

  var $label = document.createElement('label')
  $label.setAttribute('for', 'exampleInputEmail1')
  $label.textContent = 'Email address'
  $div.appendChild($label)

  var $input = document.createElement('input')
  $input.setAttribute('type', 'email')
  $input.classList.add('form-control')
  $input.setAttribute('id', 'exampleInputEmail1')
  $input.setAttribute('aria-describedby', 'emailHelp')
  $input.setAttribute('placeholder', 'Enter email')
  $div.appendChild($input)

  var $button = document.createElement('button')
  $button.setAttribute('type', 'submit')
  $button.classList.add('btn', 'btn-primary')
  $button.textContent = 'Submit'

  $form.appendChild($div)
  $form.appendChild($button)

  return $form
}
