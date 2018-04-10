;((exports) => {
  const parse = (tokens, tree = []) => {
    while (tokens.length > 0) {
      const thisToken = tokens.shift();
      if (thisToken.type === 'function') {
        const functionNode = FunctionNode.new(thisToken.value, 'function');
        parse(tokens, functionNode.args);
        tree.push(functionNode);
      }
      if (thisToken.type === 'loop') {
        const functionNode = FunctionNode.new(thisToken.value, 'loop');
        parse(tokens, functionNode.args);
        tree.push(functionNode);
      }
      if (thisToken.type === 'variable') {
        tree.push(VariableNode.new(thisToken.variableName))
      }
      if (thisToken.type === 'string') {
        tree.push(StringNode.new(thisToken.value, thisToken.variableName));
      }
      if (thisToken.type === 'number') {
        tree.push(IntegerNode.new(thisToken.value, thisToken.variableName));
      }
      
      if (thisToken.type === 'close paren') {
        break;
      }
    }
    return tree;
  };

  exports.parse = parse;
})(this);
