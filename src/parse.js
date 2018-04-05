const parse = function(tokens) {
  tree = [];
  let functionNode;
  tokens.forEach( token => {
    if (token.type === "function"){
      functionNode = FunctionNode.new(token.type, token.value, args = []);
      tree.push(functionNode);
    }
    if(token.type === 'string'){
      let stringNode = StringNode.new(token.type, token.value);
      functionNode.args.push(stringNode);
    }
  });
  return tree;
}
