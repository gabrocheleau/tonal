var h = require('snabbdom/h')

module.exports = function () {
  return h('div.card.Welcome', [
    h('h1', 'Ask tonal'),
    h('p', 'A (wester) music theory theorist. Ask me anything...')
  ])
}
