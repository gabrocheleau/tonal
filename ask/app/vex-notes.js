var tnl = require('../tonal/tonal')

module.exports = function (notes) {
  return notes.map(function (note) {
    return [tnl.letter(note), tnl.acc(note), tnl.oct(note) || 4]
  })
}
