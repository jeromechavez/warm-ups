var stopWatch = [
  {
    isStarted: false,
    timeElapsed: 0,
    timeLimit: 10
  }
]

function renderStopWatch(stopWatch) {
  var newDiv = document.createElement('div')
  newDiv.classList.add('stop-watch')
  document.body.appendChild(newDiv)

  if (stopWatch.timeElapsed === 10) {
    var newHeader = document.createElement('h1')
    newHeader.classList.add('time-elapsed is-expired')
    newHeader.textContent = stopWatch.timeElapsed
  }
  else {
    var newHeader = document.createElement('h1')
    newHeader.classList.add('time-elapsed')
    newHeader.textContent = stopWatch.timeElapsed
  }
  var newButton = document.createElement('button')
  if (!stopWatch.isStarted && stopWatch.timeElapsed === 10) {
    newButton.textContent = 'Reset'
  }
  else if (!stopWatch.isStarted && stopWatch.timeElapsed === 0) {
    newButton.textContent = 'Start'
  }
  else {
    newButton.textContent = 'Pause'
  }
  newDiv.appendChild(newHeader)
  newDiv.appendChild(newButton)
  return document.body
}
