;((exports) => {
  const StringNode = function (value, variableName) {
    this.type = 'string';
    this.value = value;
    if (variableName) {
      this.variableName = variableName;
    }
  };

  StringNode.new = function (value, variableName) {
    return new this(value, variableName);
  };

  exports.StringNode = StringNode;
})(this);
