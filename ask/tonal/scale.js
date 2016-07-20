var scale = require('tonal-scale')
var tonal = require('tonal')

function parseName (name) {
  var i = name.indexOf(' ')
  var tonic = tonal.noteName(name.substring(0, i))
  return { tonic: tonic, type: tonic ? name.substring(i + 1) : name }
}

module.exports = { parseName }
