;((exports) => {
  const interpret = function (tree) {
    functionDictionary = FunctionDictionary.new();
    let output = tree.map((node, idx) => {
      if (node.type === 'function') {
        node.args = interpret(node.args);
        return functionDictionary[node.name](node);
      } else if (node.type === 'loop') {
        interpretLoop(node.args)
      } else if (node.variableName) {
        return node.variableName;
      } else {
        return node.value;
      }
    });
    return output;
  };

  const interpretLoop = function(nodeArguments) {
    
  }

  exports.interpretLoop = interpretLoop;
  exports.interpret = interpret;
})(this);


updateVariableInNode = function(parentNode, variableName, variableValue) {
  if (parentNode.variableName === variableName) {
    parentNode.value = variableValue
  }
  if(parentNode.args) {
    parentNode.args.forEach( arg => {
      updateVariableInNode(arg, variableName, variableValue)
    })
  }
}

searchNodeForVariable = function(node) {
  if (node.variableName) {
    return node
  }
  if(node.args) {
    node.args.SOMEITERATOR( node => {
      searchNodeForVariable(node)
    })
  }
}

// let currentVariableNode = searchNodeForVariable(node)
// updateVariableInNode(node, currentVariableNode.variableName, currentVariableNode.value)
