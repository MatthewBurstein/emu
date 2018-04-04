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
      let stringNode = createStringNode(token.type, token.value)
      functionNode.arguments.push(stringNode)
    }
  })
  return output
};


const createStringNode = function(type, value) {
  return { type, value }
    // type: type,
    // value: value
}
