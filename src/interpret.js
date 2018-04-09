;((exports) => {
  const interpret = function (tree) {
    functionDictionary = FunctionDictionary.new();
    let output = tree.map((node, idx) => {
      if (node.type === 'function') {
        node.args = interpret(node.args);
        return functionDictionary[node.name](node);
      } else if (node.type === 'loop') {
        interpretLoop(node.args)
      } else {
        return node.value;
      }
    });
    return output;
  };

  const interpretLoop = function(nodeArguments) {
    console.log('interpret loop node arguments', nodeArguments)
  }

  exports.interpretLoop = interpretLoop;
  exports.interpret = interpret;
})(this);
