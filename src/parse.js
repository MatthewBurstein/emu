;((exports) => {
  const parse = (tokens, tree = []) => {
    while (tokens.length > 0) {
      const thisToken = tokens.shift();
      if (thisToken.type === 'function' || thisToken.type === 'loop') {
        const parentNode = _buildNode(thisToken.data, thisToken.type);
        parse(tokens, parentNode.children);
        tree.push(parentNode);
      }
      if (thisToken.type === 'variable') {
        tree.push(_buildNode(thisToken.data, thisToken.type));
      }
      if (thisToken.type === 'string' || thisToken.type === 'number') {
        tree.push(_buildNode(thisToken.data, thisToken.type));
      }
      if (thisToken.type === 'close paren') {
        break;
      }
    }
    return tree;
  };

  const _buildNode = (data, type, children = []) => ({ data, type, children });

  exports.parse = parse;
})(this);
