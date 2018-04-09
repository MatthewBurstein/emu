;((exports) => {
  const parse = (tokens, tree = []) => {
    while (tokens.length > 0) {
      const thisToken = tokens.shift();
      if (thisToken.type === 'function') {
        const functionNode = FunctionNode.new(thisToken.value);
        parse(tokens, functionNode.args);
        tree.push(functionNode);
      }
      if (thisToken.type === 'loop') {
        console.log('hey')
        const functionNode = FunctionNode.new(thisToken.value);
        parse(tokens, functionNode.args);
        tree.push(functionNode);
      }
      if (thisToken.type === 'string') {
        tree.push(StringNode.new(thisToken.value));
      }
      if (thisToken.type === 'number') {
        tree.push(IntegerNode.new(thisToken.value));
      }
      if (thisToken.type === 'close paren') {
        break;
      }
    }
    return tree;
  };

  exports.parse = parse;
})(this);
