const StringNode = function(type, value) {
  this.type = type;
  this.value = value;
}

StringNode.new = function(type, value) {
  return new this(type, value)
}
