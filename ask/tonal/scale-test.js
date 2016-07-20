var test = require('tape')
var scale = require('./scale')

test('parseName', function (t) {
  t.deepEqual(scale.parseName('C major'), { tonic: 'C', type: 'major' })
  t.end()
})
