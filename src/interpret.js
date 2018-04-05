const interpret = function(tree) {
  while (tree.length > 0) {
    node = tree.shift();
    if (node.name === 'say') {
      if (node.args.length === 0) {
        return ''
      }
      if (node.args.length === 1) {
        return node.args[0].value
      }
      else {
        var joinedString = ''
        for(i=0; i < args.length; i++){
          joinedString += node.args[i].value
          if (i !== args.length -1 ) {
            joinedString += ' '
          }
        }
        return joinedString
      }
    }
  }
};
