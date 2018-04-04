const parser = function(tokens) {
  output = []
  let functionNode = {};
  tokens.forEach( token => {
    if (token.type === "function"){
      output.push(functionNode)
      functionNode.type = token.type
      functionNode.name = token.value}
    if (token.type === "open paren"){
      functionNode.arguments = []}
    if(token.type === 'string'){
      functionNode.arguments.push({
        type: token.type,
        value: token.value
      })
    }
  })
  return output
};
