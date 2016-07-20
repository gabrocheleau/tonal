var contour = require('audio-contour')

var DEFAULTS = {
  freq: 440
}

module.exports = function nanosynth (ac, options) {
  var nano = {}
  var opts = Object.assign({}, options || {}, DEFAULTS)
  nano.out = ac.createGain()
  nano.osc = ac.createOscillator()
  nano.osc.frequency.value = opts.freq
  nano.filter = ac.createBiquadFilter()
  nano.amp = ac.createGain()
  nano.amp.gain.value = 0
  nano.osc.connect(nano.filter)
  nano.osc.start()
  nano.filter.connect(nano.amp)
  nano.amp.connect(nano.out)
  nano.connect = function (dest) {
    nano.out.connect(dest)
    return nano
  }
  nano.trigger = function (time, opts) {
    var when = Math.max(ac.currentTime, time)
    console.log('when', time, when, ac.currentTime)
    if (nano.env) {
      nano.env.stop()
      nano.env.disconnect()
    }
    nano.env = contour(ac, { duration: 1 })
    nano.env.connect(nano.amp.gain)
    nano.env.start(when)
  }
  return nano
}
