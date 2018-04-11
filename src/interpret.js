;((exports) => {
  const interpret = function (tree) {
    // functionDictionary = FunctionDictionary.new();
    let output = tree.map((node, idx) => {
      if (node.type === 'function') {
        const interpretedArgs = interpret(node.args);
        const tempFunctionNode = {
          args: interpretedArgs
        }
        return functionDictionary[node.name](tempFunctionNode);
      } else if (node.type === 'loop') {
        return interpretLoop(node)
      } else if (node.variableName) {
        return node;
      } else if (typeof node === 'number') {
        return node;
      } else if (typeof node === 'string') {
        return node;
      } else {
        return node.value;
      }
    });
    return output;
  };

  const interpretLoop = function(node) {
    let output = [];
    let i = 0
    let condition = node.args.shift()

    while (interpret([condition])[0] === 'yes') {
      node.args.forEach((arg) => {
        const interpretedArgs = interpret([arg])[0]
        output.push(interpretedArgs)
      })
    }
    return output;
  }

  exports.interpretLoop = interpretLoop;
  exports.interpret = interpret;
})(this);
