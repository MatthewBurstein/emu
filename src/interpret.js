const interpret = function(tree) {
  let output = ''
  tree.forEach( expression => {
    switch (expression.type) {
      case 'function':
        output += expression.name + '('
        output += interpret(expression.args)
        output += ')';
        break;
      case 'string':
        output += '"' + expression.value + '"';
        break;
      default:
        throw new Error(`I don't know token type ${expression.type}`)
    }
  })
  return output;
};
