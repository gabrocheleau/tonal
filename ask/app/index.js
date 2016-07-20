var Renderer = require('./renderer')
var h = require('snabbdom/h')
var CardViews = require('./views/cards')
var Evaluator = require('./evaluator')

function AskTonal (state) {
  return h('div#app.main', [
    Cards(state),
    Input(state)
  ])
}

function Cards (state) {
  var cards = state.cards.map(function (card) {
    return (CardViews[card.type] || CardViews['Debug'])(card, state.eval)
  })
  return h('div.cards', cards)
}

function Input (state) {
  function handler (e) {
    state.eval(e.target.value)
    e.target.value = ''
    e.target.focus()
  }
  return h('div#input', [
    h('div.main', [
      h('input', { props: { type: 'text' }, on: { change: handler } })
    ])
  ])
}

var cards = []
var app = Renderer(document.body, AskTonal)
var evaluator = Evaluator(app, cards)
evaluator('welcome')
