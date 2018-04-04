const FunctionNode = function (type, value, args) {
  this.type = type;
  this.value = value;
  this.args = args;
}

FunctionNode.new = function(type, value, args) {
  return new this(type, value, args);
}

FunctionNode.prototype.interpret = function(callback, callbackArgument) {
  console.log(callback)
  return `${callback(callbackArgument)}`
}
