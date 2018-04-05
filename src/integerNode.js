const IntegerNode = function (type, value) {
  this.type = type;
  this.value = value
}

IntegerNode.new = function(type, value) {
  return new this(type, value)
}
