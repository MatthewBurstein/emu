;((exports) => {
  const interpret = function(tree) {
    dictionary = Dictionary.new()
    while (tree.length > 0) {
      node = tree.shift();
      if (node.type === 'function') {
        interpret(node.args)
        node = dictionary[node.name](node) // === eg. dictionary.say(node) is the same as dictionary[say](node)
      }
      else {
        break;
      }
    }
  };

  exports.interpret = interpret
})(this)
