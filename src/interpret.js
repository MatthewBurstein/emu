const interpret = function(tree) {
  dictionary = new Dictionary()
  while (tree.length > 0) {
    node = tree.shift();
    return dictionary[node.name](node)
  }
};
