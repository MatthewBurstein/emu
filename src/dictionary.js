;((exports) => {
  const Dictionary = function () {
  }

  Dictionary.new = function () {
    return new this();
  }

  Dictionary.prototype.say = function(node) {
    return node.args.join(' ')
  }

  Dictionary.prototype.add = function(node) {
    if(node.args.length === 0 ) { return 0 }
    return node.args.reduce((sum, value) => sum + value)
  }

  Dictionary.prototype.subtract = function(node) {
    if(node.args.length === 0 ) { return 0 }
    return node.args.reduce(function(left, right) { return left - right})
  }

  Dictionary.prototype.multiply = function(node) {
    if(node.args.length === 0 ) { return 0 }
    return node.args.reduce(function(left, right) { return left * right})
  }

  Dictionary.prototype.modulo = function(node) {
    if(node.args.length === 0 ) { return 0 }
    if(node.args.length === 1 ) { return node.args[0] }
    var left = node.args[0]
    var right = node.args[1]
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

  Dictionary.prototype.isGreaterThan = function(node) {
    var firstArg = node.args[0]
    var secondArg = node.args[1]
    if (firstArg === undefined) {
      return 'there is nothing to compare'
    }
    if (secondArg === undefined) {
      return 'pass two arguments'
    }
    if (firstArg === secondArg) {
      return 'no'
    }
    if (firstArg > secondArg) {
      return 'yes'
    }
    if (secondArg > firstArg) {
      return 'no'
    }
  }

  Dictionary.prototype.isEqual = function(node) {
    var firstArg = node.args[0]
    var secondArg = node.args[1]
    if (firstArg === undefined) {
      return 'there is nothing to compare'
    }
    if (secondArg === undefined) {
      return 'pass two arguments'
    }
    if (firstArg === secondArg) {
      return 'yes'
    }
    if (firstArg !== secondArg) {
      return 'no'
    }
  }

  Dictionary.prototype.isLessThan = function(node) {
    var firstArg = node.args[0]
    var secondArg = node.args[1]
    if (firstArg === undefined) {
      return 'there is nothing to compare'
    }
    if (secondArg === undefined) {
      return 'pass two arguments'
    }
    return firstArg < secondArg ? 'yes' : 'no'

  }

  exports.Dictionary = Dictionary
})(this)
