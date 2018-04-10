const variableDictionary = [
];

const getVariableValue = function(node) {
  const variable = findVariableInDictionary(node)
  return variable.value
}

const getVariableName = function(node) {
  const variable = findVariableInDictionary(node)
  return variable.variableName
}

const findVariableInDictionary = function(queryVariableNode) {
  return variableDictionary.find( variable => {
    return variable.variableName === queryVariableNode.variableName;
  })
}
