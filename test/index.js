var test = require('tape')
var hex = require('sjcl-codec-hex/from-bits')
var vectors = require('./vectors')
var hash = require('../hash')

test('it works', function (assert) {
  assert.plan(vectors.length)
  vectors.forEach(function (vec) {
    assert.equal(hex(hash(vec[0])), vec[1])
  })
})
