var snabbdom = require('snabbdom')
var patch = snabbdom.init([ // Init patch function with choosen modules
  require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/style'), // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners') // attaches event listeners
])

module.exports = function Renderer (base, component) {
  var prev = null
  return function (state, override) {
    if (override) state = Object.assign({}, state, override)
    var node = component(state)
    patch(prev || base, node)
    prev = node
  }
}
