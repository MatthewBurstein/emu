;((exports) => {
  const interpret = function(tree) {
    dictionary = Dictionary.new()
    tree = tree.map((node, idx) => {
      if (node.type === 'function') {
        node.args = interpret(node.args)
        return dictionary[node.name](node)
      } else {
        return node.value
      }
    })
    return tree
  }

  exports.interpret = interpret
})(this)
