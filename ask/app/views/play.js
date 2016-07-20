/* global AudioContext */
var h = require('snabbdom/h')
var ac = new AudioContext()

module.exports = function (card) {
  return h('div.card.Play', [
    h('a', 'Pause')
  ])
}
