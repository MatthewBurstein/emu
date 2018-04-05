const parser = function (tokens) {
  const output = [];

  let functionNode;

  tokens.forEach((token) => {
    if (token.type === 'function') {
      functionNode = createFunctionNode(token.type, token.value);
      output.push(functionNode);
    }

    if (token.type === 'string') {
      const stringNode = createStringNode(token.type, token.value);
      functionNode.args.push(stringNode);
    }
  });

  return output;
};

const createStringNode = function (type, value) {
  return { type, value };
};

const createFunctionNode = function (type, name) {
  return { type, name, args: [] };
};
