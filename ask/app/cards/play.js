module.exports = function (cmd) {
  if (!cmd.startsWith('play ')) return null
  var notes = cmd.substring(5).split(',')
  console.log('play', notes)
  return {
    type: 'Play'
  }
}
