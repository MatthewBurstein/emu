const FunctionNode = function (type, value) {
  this.type = type;
  this.value = value;
}

FunctionNode.new = function(type, value) {
  return new this(type, value);
}
