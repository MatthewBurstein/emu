;((exports) => {
  const parse = (tokens, tree = []) => {
    while (tokens.length > 0) {
      const thisToken = tokens.shift();
      if (thisToken.type === 'function') {
        // const functionNode = FunctionNode.new(thisToken.value, 'function');
        // parse(tokens, functionNode.args);
        // tree.push(functionNode);
        const functionNode = _buildNode(thisToken.value, thisToken.type)
        parse(tokens, functionNode.children)
        tree.push(functionNode)
      }
      if (thisToken.type === 'loop') {
        // const functionNode = FunctionNode.new(thisToken.value, 'loop');
        // parse(tokens, functionNode.args);
        // tree.push(functionNode);
        const whileNode = _buildNode(thisToken.value, thisToken.type)
        parse(tokens, whileNode.children)
        tree.push(whileNode)
      }
      if (thisToken.type === 'variable') {
        tree.push(VariableNode.new(thisToken.variableName))
      }
      if (thisToken.type === 'string') {
        // tree.push(StringNode.new(thisToken.value, thisToken.variableName));
        tree.push(_buildNode(thisToken.value, thisToken.type))
      }
      if (thisToken.type === 'number') {
        tree.push(_buildNode(thisToken.value, thisToken.type))
        // tree.push(IntegerNode.new(thisToken.value));
      }

      if (thisToken.type === 'close paren') {
        break;
      }
    }
    return tree;
  };

  const _buildNode = (data, type, children = []) => {
    return { data, type, children }
  }

  exports.parse = parse;
})(this);
