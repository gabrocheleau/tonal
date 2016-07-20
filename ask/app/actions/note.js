var tonal = require('tonal')
var vexNotes = require('../vex-notes')

module.exports = function NoteCard (cmd) {
  var note = tonal.noteName(cmd)
  if (!note) return null
  return {
    type: 'Note',
    name: note,
    score: vexNotes([ note ])
  }
}
