function commandNotFound (cmd) {
  return { type: 'Message', text: 'Command not found: ' + cmd }
}

function welcome (cmd) {
  return cmd === 'welcome' ? { type: 'Welcome' } : null
}

var actions = [
  require('./actions/note'),
  require('./actions/scale'),
  require('./actions/scales'),
  require('./actions/play'),
  require('./actions/modesOf'),
  welcome,
  commandNotFound
]
var actionLen = actions.length

module.exports = function Evaluator (app, cards) {
  return function evaluate (command) {
    console.log('Command: ', command)
    var cmd = command.toLowerCase()
    var card = null
    for (var i = 0; i < actionLen; i++) {
      card = actions[i](cmd)
      if (card) {
        console.log('Card: ', card)
        cards.push(card)
        app({ eval: evaluate, cards: cards })
        return
      }
    }
  }
}
