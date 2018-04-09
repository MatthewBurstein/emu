;((exports) => {
  const interpret = function (tree) {
    functionDictionary = FunctionDictionary.new();
    tree = tree.map((node, idx) => {
      if (node.type === 'function') {
        node.args = interpret(node.args);
        return functionDictionary[node.name](node);
      } else if (node.type === 'loop') {
        interpretLoop(node.args)
      } else {
        return node.value;
      }
    });
    return tree;
  };

  const interpretLoop = function(nodeArguments) {
    console.log('hi')
  }

  exports.interpretLoop = interpretLoop;
  exports.interpret = interpret;
})(this);
