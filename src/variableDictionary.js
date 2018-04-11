const variableDictionary = [
];

const getVariableValue = function(node) {
  const variable = findVariableInDictionary(node)
  return variable.data
}

const getVariableName = function(node) {
  const variable = findVariableInDictionary(node)
  return variable.name
}

const findVariableInDictionary = function(queryVariableNode) {
  return variableDictionary.find( dictionaryVariable => {
    return dictionaryVariable.name === queryVariableNode.data;
  })
}
