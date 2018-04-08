;((exports) => {
  const interpret = function(tree) {
    functionDictionary = FunctionDictionary.new()
    tree = tree.map((node, idx) => {
      if (node.type === 'function') {
        // node.args = interpret(node.args)
        return functionDictionary[node.name](node)
      } else {
        console.log(node)
        return node.value
      }
    })
    return tree
  }

  exports.interpret = interpret
})(this)
