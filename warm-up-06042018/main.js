
var parentEl = document.querySelector('div')

parentEl.addEventListener('click', function (e) {
  let target = event.target
  if (target.tagName != 'card') return;
  returnNum(target)
})

function returnNum (number) {
  console.log(number.closest('data-number'))
}
