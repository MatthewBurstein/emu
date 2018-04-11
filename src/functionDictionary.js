;((exports) => {
  const FunctionDictionary = function () {
  }

  FunctionDictionary.new = function () {
    return new this();
  }

  FunctionDictionary.prototype.say = function(node) {
    const args = this._convertVariablesToValues(node.children)
    return args.join(' ')
  }

  FunctionDictionary.prototype.add = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0 ) { return 0 }
    return args.reduce((sum, value) => sum + value)
  }

  FunctionDictionary.prototype.subtract = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0 ) { return 0 }
    return args.reduce(function(accumulator, elem) { return accumulator - elem })
  }

  FunctionDictionary.prototype.multiply = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0 ) { return 0 }
    return args.reduce(function(accumulator, elem) { return accumulator * elem })
  }

  FunctionDictionary.prototype.modulo = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0 ) { return 0 }
    if (args.length === 1 ) { return args[0] }
    return args[0] % args[1]
  }

  FunctionDictionary.prototype.assignVariable = function(node) {
    const args = this._convertVariablesToNames(node.children)
    this._updateTokenDictionary(args)
    this._updateVariableDictionary(args)
  }

  FunctionDictionary.prototype.isGreaterThan = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0) {
      return 'there is nothing to compare'
    }
    if (args.length === 1) {
      return 'pass two arguments'
    }
    return args[0] > args[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.isEqual = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0) {
      return 'there is nothing to compare'
    }
    if (args.length === 1) {
      return 'pass two arguments'
    }
    return args[0] === args[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.isLessThan = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if (args.length === 0) {
      return 'there is nothing to compare'
    }
    if (args.length === 1) {
      return 'pass two arguments'
    }
    return args[0] < args[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.if = function(node) {
    const args = this._convertVariablesToValues(node.children)
    if ( args[0] === 'yes') {
      return args[1]
    } else {
      return args[2]
    }
  }

  FunctionDictionary.prototype.returnFirst = function(node) {
    return node.children[0]
  }

  FunctionDictionary.prototype._convertVariablesToNames = function(functionNodeArgs) {
    return functionNodeArgs.map(arg => {
      return arg.data ? getVariableName(arg) : arg;
    })
  };

  FunctionDictionary.prototype._convertVariablesToValues = function(functionNodeArgs) {
    return functionNodeArgs.map(argNode => {
      return argNode.data ? getVariableValue(argNode) : argNode;
    })
  };

  FunctionDictionary.prototype._updateTokenDictionary = function(args) {
    const existingTokenLex = tokenDictionary.find(tokenLex => {
      return tokenLex.data === args[0]
    })
    if (!existingTokenLex) {
      const newTokenLex = this._buildTokenLex(args[0])
      tokenDictionary.push(newTokenLex)
    }
  }

  FunctionDictionary.prototype._updateVariableDictionary = function(args) {
    const existingDictionaryVariable = variableDictionary.find(variable => {
      return variable.name = args[0]
    })
    if (existingDictionaryVariable) {
      existingDictionaryVariable.data = args[1]
    } else {
      variableDictionary.push({ name: args[0], data: args[1] })
    }
  }

  FunctionDictionary.prototype._buildTokenLex = function(variableName) {
    return {
      regEx: new RegExp(`^${variableName}`),
      type: 'variable',
      data: variableName
    }
  }

  exports.functionDictionary = FunctionDictionary.new()
})(this)
