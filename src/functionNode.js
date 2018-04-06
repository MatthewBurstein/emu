const FunctionNode = function (name, args) {
  this.name = name;
  this.args = args;
}

FunctionNode.new = function(name, args) {
  return new this(name, args);
}

// FunctionNode.prototype.interpretNode = function(callback, callbackArgument) {
//   return this.name + "(" + callback(callbackArgument) +")"
// }
