const Dictionary = function () {
}

Dictionary.prototype.say = function(node) {
  let argValues = this.getArgValues(node)
  return argValues.join(' ')
}

Dictionary.prototype.add = function(node) {
  if(node.args.length === 0 ) { return 0 }
  return this.getArgValues(node).reduce((sum, value) => sum + value)
}

Dictionary.prototype.subtract = function(node) {
  return this.getArgValues(node).reduce(function(left, right) { return left - right})
}

Dictionary.prototype.getArgValues = function(node) {
  return node.args.map(argNode => argNode.value)
}
