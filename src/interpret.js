;((exports) => {
  const interpret = function(tree) {
    dictionary = Dictionary.new()
    while (tree.length > 0) {
      node = tree.shift();
      return dictionary[node.name](node) // === eg. dictionary.say(node) is the same as dictionary[say](node)
    }
  };

  exports.interpret = interpret
})(this)
