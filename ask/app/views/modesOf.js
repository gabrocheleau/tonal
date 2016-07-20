var h = require('snabbdom/h')
var Score = require('./score')

module.exports = function (card) {
  return h('div.card.ModesOf', [
    h('h1', card.name)
  ].concat(card.modes.map(mode)))
}

function mode (mode) {
  return h('div.mode', [
    h('h3', mode.name)
  ])
}
