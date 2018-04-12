;((exports) => {
  const variableDictionary = [
  ];

  const getVariableValue = function (node) {
    const variable = _findVariableInDictionary(node);
    return variable.data;
  };

  const getVariableName = function (node) {
    const variable = _findVariableInDictionary(node);
    return variable.name;
  };

  const _findVariableInDictionary = function (queryVariableNode) {
    return variableDictionary.find( dictionaryVariable => {
      return dictionaryVariable.name === queryVariableNode.data;
    });
  };

  exports.variableDictionary = variableDictionary;
  exports.getVariableValue = getVariableValue;
  exports.getVariableName = getVariableName;

})(this);
