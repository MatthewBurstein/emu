const parser = function(tokens) {
  output = []
  let functionNode = {};
  tokens.forEach( token => {
    if (token.type === "function"){
      console.log(token)
      output.push(functionNode)
      functionNode.type = token.type
      functionNode.name = token.value}
    if (token.type === "open paren")
      {console.log(token)
      functionNode.arguments = []}
    if(token.type === 'string')
      {console.log(token)
      functionNode.arguments.push({
        type: token.type,
        value: token.value
      })
      console.log(output)}
  })
  return output
};
