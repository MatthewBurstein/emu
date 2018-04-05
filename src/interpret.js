const interpret = function(tree) {
  let output = '';
  while (tree.length > 0) {
    node = tree.shift();
    output += node.interpretNode(interpret, node.args);
    output += addCommaIfNecessary(tree);
  }
  return output;
};

const addCommaIfNecessary = function(tree) {
  return tree.length > 0 ? ', ' : ''
}
