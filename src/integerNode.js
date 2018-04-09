;((exports) => {
  const IntegerNode = function (value, variableName) {
    this.type = 'number';
    this.value = value;
    if (variableName) {
      this.variableName = variableName;
    }
  };

  IntegerNode.new = function(value, variableName) {
    return new this(value, variableName);
  };

  exports.IntegerNode = IntegerNode;
})(this);
