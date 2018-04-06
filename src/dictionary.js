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
