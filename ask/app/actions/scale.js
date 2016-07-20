var tonal = require('../../tonal/scale')
var vexNotes = require('../vex-notes')

module.exports = function (cmd) {
  var notes, name
  if (!cmd.startsWith('scale ')) return null

  console.log(tonal)
  var tonic = tonal.scale.tonic(name)
  var type = tonal.scale.name(name)
  name = tonic ? tonic + ' ' + type : type

  return {
    type: 'Scale',
    name: name,
    notes: notes,
    score: vexNotes(notes),
    actions: [
      { name: 'Play', action: 'play ' + notes.join(', ') },
      { name: 'Modes', action: 'modes of ' + name }
    ]
  }
}
