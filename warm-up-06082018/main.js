/* global state, queryString, renderPokedex */

renderApp(state)

function renderApp(state) {
  var $app = document.querySelector('#app')
  $app.innerHTML = ''
  $app.appendChild(renderPokedex(state.pokedex, state.type))
}

/**
 * Add your 'hashchange' event listener here.
 *
 */
window.addEventListener("hashchange", (event) => {
  var currentHash = queryString.parse(event.location.hash.slice(1))

})

window.dispatchEvent(new Event('hashchange'))
