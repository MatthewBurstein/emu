;((exports) => {
    const VariableNode = function (variableName) {
      this.type = 'variable';
      this.variableName = variableName;
    };
  
    VariableNode.new = function (variableName) {
      return new this(variableName);
    };
  
    exports.VariableNode = VariableNode;
  })(this);
  