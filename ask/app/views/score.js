/* global Vex */
var h = require('snabbdom/h')

module.exports = function Score (notes) {
  console.log('score', notes)
  var vex = (node) => renderVexScore(notes, node.elm)
  return h('canvas.score',
    { props: { width: 900, height: 110 },
    hook: { insert: vex, update: (_, node) => vex(node) }
  })
}

function renderVexScore (notes, canvas) {
  var renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS)

  var ctx = renderer.getContext()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var stave = new Vex.Flow.Stave(0, 0, 500)
  stave.addClef('treble').setContext(ctx).draw()

  Vex.Flow.Formatter.FormatAndDraw(ctx, stave, notes.map(function (n) {
    var pc = n[0]
    var alt = n[1]
    var oct = n[2]
    var note = new Vex.Flow.StaveNote({ keys: [pc + '/' + oct], duration: 'q' })
    if (alt) note.addAccidental(0, new Vex.Flow.Accidental(alt))
    return note
  }))
}
