const parser = function(tokens) {
  output = [];
  let functionNode;
  tokens.forEach( token => {
    if (token.type === "function"){
      functionNode = createFunctionNode(token.type, token.value);
      output.push(functionNode);
    }
    if(token.type === 'string'){
      let stringNode = createStringNode(token.type, token.value);
      functionNode.args.push(stringNode);
    }
  });
  return output;
};


const createStringNode = function(type, value) {
  return { type, value };
}

const createFunctionNode = function(type, name) {
  return {type, name, args: []};
}
