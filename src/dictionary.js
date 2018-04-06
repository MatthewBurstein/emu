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
  if(node.args.length === 0 ) { return 0 }
  return this.getArgValues(node).reduce(function(arg1, arg2) { return arg1 - arg2})
}

Dictionary.prototype.multiply = function(node) {
  if(node.args.length === 0 ) { return 0 }
  return this.getArgValues(node).reduce(function(arg1, arg2) { return arg1 * arg2})
}

Dictionary.prototype.modulo = function(node) {
  if(node.args.length === 0 ) { return 0 }
  if(node.args.length === 1 ) { return this.getArgValues(node)[0] }
  var arg1 = this.getArgValues(node)[0]
  var arg2 = this.getArgValues(node)[1]
  return arg1 % arg2
}

Dictionary.prototype.getArgValues = function(node) {
  return node.args.map(argNode => argNode.value)
}

Dictionary.prototype.assignVariable = function(node) {
  let tokenLex = {
    regEx: new RegExp(`^${node.args[0].value}`),
    type: 'variable',
    value: node.args[1].value,
    variableType: node.args[1].type
  }

  tokenDictionary.push(tokenLex)
}
