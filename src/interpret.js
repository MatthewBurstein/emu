const interpret = function(tree) {
  // var dictionary = new Dictionary
  // let output = '';
  while (tree.length > 0) {
    node = tree.shift();
    if (node.name === 'say') {
      if (node.args.length === 1) {
        return node.args[0].value
      }
      else {
        var joinedString = ''
        for(i=0; i < args.length + 1; i++){
          joinedString += node.args[i].value
          if (i !== args.length) {
            joinedString += ' '
          }
        }
        return joinedString
      }
    }
  }
};
