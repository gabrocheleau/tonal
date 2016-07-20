var scales = require('tonal-scale')
var tonal = require('tonal')

module.exports = function (action) {
  action = action.toLowerCase()
  return noteData(action) || scaleData(action) || scales(action)
}

function keyOf (name) {

}

function scales (name) {
  if (name !== 'scales') return null
  return {
    type: 'list',
    title: 'Available scale names',
    list: scales.names(),
    itemAction: 'scale '
  }
}

function noteData (name) {
  var parsed = null
  if (!parsed) return null
  return {
    type: 'note',
    name: name,
    notes: [ name ],
    actions: [
      { name: 'Major tonality', desc: 'Major tonality', action: 'key of ' + name + ' major' },
      { name: 'Minor tonality', desc: 'Major tonality', action: 'key of ' + name + ' minor' },
      { name: 'Scales', desc: 'All ' + name + ' scales', action: 'scales for ' + name },
      { name: 'Chords', desc: 'All ' + name + ' chords', action: 'chords for ' + name }
    ]
  }
}

function scaleData (name) {
  var notes = scales.get(name)
  if (!notes) return null
  return {
    type: 'scale',
    name: name,
    notes: notes,
    actions: [
      { name: 'Modes', desc: 'All modes of ' + name, action: 'modes of ' + name },
      { name: 'Chords', desc: 'Chords that fits this scale', action: 'chords in ' + name },
      { name: 'Mode chords', desc: 'Chords that fits this scale', action: 'chords of ' + name }
    ]
  }
}
