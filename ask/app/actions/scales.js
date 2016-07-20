var scale = require('tonal-scale')

module.exports = function (cmd) {
  if (cmd !== 'scales') return null
  return {
    type: 'List',
    name: 'Available scales',
    list: scale.names(),
    itemAction: 'scale '
  }
}
