;((exports) => {
  const interpret = function (tree) {
    let output = tree.map( node => {
      if (node.type === 'function') {
        const dictionaryReadyFunctionNode = {
          children: interpret(node.children)
        }
        return functionDictionary[node.data](dictionaryReadyFunctionNode);
      } else if (node.type === 'loop') {
        return _interpretLoop(node)
      } else if (_isCollapsedLiteral(node)) {
        return node;
      } else {
        return node.data;
      }
    });
    return output;
  };

  const _interpretLoop = function(node) {
    let output = [];
    let condition = node.children.shift();

    while (interpret([condition])[0] === 'yes') {
      node.children.forEach((children) => {
        const interpretedChildren = interpret([arg])[0]
        output.push(interpretedChildren)
      })
    }
    return output;
  }

  const _isCollapsedLiteral = function(node) {
    return typeof node === 'number' || typeof node === 'string'
  }

  exports.interpret = interpret;
})(this);
