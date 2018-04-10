;((exports) => {
  const FunctionNode = function (name, type, args = []) {
    this.name = name;
    this.args = args;
    this.type = type;
  };

  FunctionNode.new = function (name, type, args) {
    return new this(name, type, args);
  };

  exports.FunctionNode = FunctionNode;
})(this);
