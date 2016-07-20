var test = require('tape')
var theorist = require('../lib/theorist')

test('detect scales', function (t) {
  t.equal(theorist('C major').type, 'scale')
  t.deepEqual(theorist('C major').notes, [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ])
  t.end()
})

test('list scales', function (t) {
  t.equal(theorist('scales').type, 'list')
})
