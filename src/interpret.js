;((exports) => {
  const interpret = function(tree) {
    dictionary = new Dictionary()
    while (tree.length > 0) {
      node = tree.shift();
      return dictionary[node.name](node) // === eg. dictionary.say(node) is the same as dictionary[say](node)
    }
  };

  exports.interpret = interpret
})(this)
