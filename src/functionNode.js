const FunctionNode = function (type, name, args) {
  this.type = type;
  this.name = name;
  this.args = args;
}

FunctionNode.new = function(type, name, args) {
  return new this(type, name, args);
}

FunctionNode.prototype.interpret = function(callback, callbackArgument) {
  return `${this.name}(${callback(callbackArgument)})`
}
