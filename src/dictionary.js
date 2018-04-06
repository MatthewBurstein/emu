;((exports) => {
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
    return this.getArgValues(node).reduce(function(left, right) { return left - right})
  }

  Dictionary.prototype.multiply = function(node) {
    if(node.args.length === 0 ) { return 0 }
    return this.getArgValues(node).reduce(function(left, right) { return left * right})
  }

  Dictionary.prototype.modulo = function(node) {
    if(node.args.length === 0 ) { return 0 }
    if(node.args.length === 1 ) { return this.getArgValues(node)[0] }
    var left = this.getArgValues(node)[0]
    var right = this.getArgValues(node)[1]
    return left % right
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

  exports.Dictionary = Dictionary
})(this)
