var h = require('snabbdom/h')
var Score = require('./score')

module.exports = function (card, dispatch) {
  return h('div.card.Notes', [
    h('h3', card.type),
    h('h2', card.name),
    Score(card.score),
    Actions(card.actions, dispatch)
  ])
}

function Actions (actions, dispatch) {
  return h('div.actions', actions.reduce(function (e, action) {
    var handle = () => dispatch(action.action)
    e.push(h('a', { props: { href: '#' }, on: { click: handle } }, action.name))
    e.push(h('span.sep', '|'))
    return e
  }, []))
}
