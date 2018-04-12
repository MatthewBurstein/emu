((exports) => {
  const interpret = function (tree) {
    const output = tree.map((node) => {
      if (node.type === 'function') {
        const dictionaryReadyFunctionNode = {
          children: interpret(node.children)
        };
        return functionDictionary[node.data](dictionaryReadyFunctionNode);
      } else if (node.type === 'loop') {
        return _interpretLoop(node);
      } else if (node.type === 'variable') {
        return node;
      } else if (_isCollapsedLiteral(node)) {
        return node;
      }
      return node.data;
    });
    return output;
  };

  const _interpretLoop = function (node) {
    const output = [];
    const condition = node.children.shift();
    while (interpret([condition])[0] === 'yes') {
      node.children.forEach((child) => {
        const interpretedChildren = interpret([child])[0];
        output.push(interpretedChildren);
      });
    }
    return output;
  };

  const _isCollapsedLiteral = function (node) {
    return typeof node === 'number' || typeof node === 'string';
  };

  exports.interpret = interpret;
})(this);
