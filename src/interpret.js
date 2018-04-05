const interpret = function(tree) {
  dictionary = new Dictionary()
  while (tree.length > 0) {
    node = tree.shift();
    if (node.name === 'say') {
      return dictionary.say(node)
    }
  }
};
