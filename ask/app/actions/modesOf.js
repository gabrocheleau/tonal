var scale = require('tonal-scale')
var tonal = require('tonal')
var vexNotes = require('../vex-notes')
var REGEX = /^modes of (.+)$/

module.exports = function (cmd) {
  var m = REGEX.exec(cmd)
  if (!m) return null
  var name = m[1]
  var notes = scale.get(name)
  var modes = notes.map(function (_, i) {
    return tonal.rotate(i, notes)
  }).map(function (notes, i) {
    return 'Mode #' + i
  })
  return {
    type: 'List',
    name: 'Modes of ' + name,
    list: modes,
    itemAction: 'scale '
  }
}
