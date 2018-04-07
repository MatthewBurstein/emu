;((exports) => {
  const FunctionNode = function (name, args) {
    this.name = name;
    this.args = args;
    this.type = 'function';
  }

  FunctionNode.new = function(name, args) {
    return new this(name, args);
  }

  // FunctionNode.prototype.interpretNode = function(callback, callbackArgument) {
  //   return this.name + "(" + callback(callbackArgument) +")"
  // }

  exports.FunctionNode = FunctionNode
})(this)
