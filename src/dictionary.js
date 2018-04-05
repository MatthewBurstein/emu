const Dictionary = function () {
}

Dictionary.prototype.say = function(node) {
  if (node.args.length === 0) {
    return ''
  }
  if (node.args.length === 1) {
    return node.args[0].value
  }
  else {
    var joinedString = ''
    for(i=0; i < args.length; i++){
      joinedString += node.args[i].value
      if (i !== args.length -1 ) {
        joinedString += ' '
      }
    }
    return joinedString
  }
}

Dictionary.prototype.add = function(node) {
  var sum = 0
  node.args.forEach(arg => {
    sum += arg.value
  })
  return sum
}
