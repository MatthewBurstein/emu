;((exports) => {

  const parse = function(tokens, tree = []) {

    while (tokens.length > 0) {
      let thisToken = tokens.shift()
      if (thisToken.type === "function") {
        let functionNode = FunctionNode.new(thisToken.value, args = []);
        parse(tokens, functionNode.args)
        tree.push(functionNode);
      }
      if(thisToken.type === 'string') {
        tree.push(StringNode.new(thisToken.value));
      }
      if(thisToken.type === 'integer') {
        tree.push(IntegerNode.new(thisToken.value));
      }
      if(thisToken.type === 'close paren') {
        break;
      }
    }
    return tree;
  }

  exports.parse = parse
})(this)
