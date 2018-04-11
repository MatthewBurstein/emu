;((exports) => {
  const interpret = function (tree) {
    functionDictionary = FunctionDictionary.new();
    let output = tree.map((node, idx) => {
      if (node.type === 'function') {
        const interpretedChildren = interpret(node.children);
        const tempFunctionNode = {
          children: interpretedChildren
        }
        return functionDictionary[node.data](tempFunctionNode);
      } else if (node.type === 'loop') {
        return interpretLoop(node)
      } else if (node.data) {
        return node;
      } else if (typeof node === 'number') {
        return node;
      } else if (typeof node === 'string') {
        return node;
      } else {
        return node.data;
      }
    });
    return output;
  };

  const interpretLoop = function(node) {
    let output = [];
    let i = 0
    let condition = node.children.shift()

    while (interpret([condition])[0] === 'yes') {
      node.children.forEach((children) => {
        const interpretedChildren = interpret([arg])[0]
        output.push(interpretedChildren)
      })
    }
    return output;
  }

  exports.interpretLoop = interpretLoop;
  exports.interpret = interpret;
})(this);
