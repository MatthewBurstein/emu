;((exports) => {
  const FunctionDictionary = function () {
  }

  FunctionDictionary.new = function () {
    return new this();
  }

  FunctionDictionary.prototype.say = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    return arguments.join(' ')
  }

  FunctionDictionary.prototype.add = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0 ) { return 0 }
    return arguments.reduce((sum, value) => sum + value)
  }

  FunctionDictionary.prototype.subtract = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0 ) { return 0 }
    return arguments.reduce(function(accumulator, elem) { return accumulator - elem })
  }

  FunctionDictionary.prototype.multiply = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0 ) { return 0 }
    return arguments.reduce(function(accumulator, elem) { return accumulator * elem })
  }

  FunctionDictionary.prototype.modulo = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0 ) { return 0 }
    if (arguments.length === 1 ) { return arguments[0] }
    return arguments[0] % arguments[1]
  }

  FunctionDictionary.prototype.assignVariable = function(node) {
    const args = this._convertVariablesToNames(node.args)
    this._updateTokenDictionary(args)
    this._updateVariableDictionary(args)
  }

  FunctionDictionary.prototype.isGreaterThan = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0) {
      return 'there is nothing to compare'
    }
    if (arguments.length === 1) {
      return 'pass two arguments'
    }
    return arguments[0] > arguments[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.isEqual = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0) {
      return 'there is nothing to compare'
    }
    if (arguments.length === 1) {
      return 'pass two arguments'
    }
    return arguments[0] === arguments[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.isLessThan = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if (arguments.length === 0) {
      return 'there is nothing to compare'
    }
    if (arguments.length === 1) {
      return 'pass two arguments'
    }
    return arguments[0] < arguments[1] ? 'yes' : 'no'
  }

  FunctionDictionary.prototype.if = function(node) {
    const arguments = this._convertVariablesToValues(node.args)
    if ( arguments[0] === 'yes') {
      return arguments[1]
    } else {
      return arguments[2]
    }
  }

  FunctionDictionary.prototype.returnFirst = function(node) {
    return node.args[0]
  }

  FunctionDictionary.prototype._convertVariablesToNames = function(functionNodeArgs) {
    return functionNodeArgs.map(arg => {
      return arg.variableName ? getVariableName(arg) : arg;
    })
  };

  FunctionDictionary.prototype._convertVariablesToValues = function(functionNodeArgs) {
    return functionNodeArgs.map(arg => {
      return arg.variableName ? getVariableValue(arg) : arg;
    })
  };

  FunctionDictionary.prototype._updateTokenDictionary = function(args) {
    const existingTokenLex = tokenDictionary.find(tokenLex => {
      return tokenLex.variableName === args[0]
    })
    if (existingTokenLex) {
      existingTokenLex.value = args[1]
    } else {
      const newTokenLex = this._buildTokenLex(args[0])
      tokenDictionary.push(newTokenLex)
    }
  }

  FunctionDictionary.prototype._updateVariableDictionary = function(args) {
    const existingDictionaryVariable = variableDictionary.find(variable => {
      return variable.variableName = args[0]
    })
    if (existingDictionaryVariable) {
      existingDictionaryVariable.value = args[1]
    } else {
      variableDictionary.push({ variableName: args[0], value: args[1] })
    }
  }

  FunctionDictionary.prototype._buildTokenLex = function(variableName) {
    return {
      regEx: new RegExp(`^${variableName}`),
      type: 'variable',
      variableName: variableName
    }
  }

  exports.functionDictionary = FunctionDictionary.new()
})(this)
