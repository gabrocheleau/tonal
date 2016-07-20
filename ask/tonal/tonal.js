var tonal = require('tonal')
var parser = require('note-parser')

tonal.letter = (note) => tonal.pc(note).charAt(0)
tonal.acc = (note) => tonal.pc(note).substring(1)
tonal.oct = (note) => parser.oct(note)

module.exports = tonal
