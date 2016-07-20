var Score = require('./score')
var Notes = require('./notes')
var h = require('snabbdom/h')

module.exports = {
  Modes: require('./modesOf'),
  Welcome: require('./welcome'),
  Play: require('./play'),
  Cmd: function (card) {
    return h('div.card.Cmd', card.text)
  },
  List: function (card, dispatch) {
    function handle (item, action) {
      return (e) => dispatch(action + item)
    }
    return h('div.card.List', [
      h('h3', card.name),
      h('div.list', card.list.map((n) => {
        return !card.itemAction ? h('div.item', n)
          : h('a.item', { props: { href: '#' },
              on: { click: handle(n, card.itemAction) } }, n)
      }))
    ])
  },
  Note: function (card) {
    return h('div.card.Note', [
      h('h3', card.name),
      Score(card.score)
    ])
  },
  Scale: Notes,
  Message: function (card) {
    return h('div.card.Message', card.text)
  },
  Debug: function (card) {
    return h('div.card.Debug', [
      h('pre', JSON.stringify(card, null, 2))
    ])
  }
}
