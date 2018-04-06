;((exports) => {
  const parse = function(tokens) {
    tree = [];
    let functionNode;
    tokens.forEach( token => {
      if (token.type === "function") {
        functionNode = FunctionNode.new(token.value, args = []);
        tree.push(functionNode);
      }
      if(token.type === 'string') {
        let stringNode = StringNode.new(token.value);
        functionNode.args.push(stringNode);
      }
      if(token.type === 'integer') {
        let integerNode = IntegerNode.new(token.value);
        functionNode.args.push(integerNode);
      }
    });
    return tree;
  }

  exports.parse = parse
})(this)
