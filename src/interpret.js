const interpret = function(tree) {
  let output = '';
  while (tree.length > 0) {
    node = tree.shift();
    switch (node.type) {
      case 'function':
        output += interpretFunction(node);
        break;
      case 'string':
        output += '"' + node.value + '"';
        break;
      default:
        throw new Error(`I don't know token type ${expression.type}`);
    }
    output += addCommaIfNecessary(tree);
  }
  return output;
};

const addCommaIfNecessary = function(array) {
  return array.length > 0 ? ', ' : ''
}

const interpretFunction = function(node) {
  return `${node.name}(${interpret(node.args)})`
}
const interpretString = function(outputString, node) {
  return `"${node.value}"`;
}
