const IntegerNode = function (value) {
  this.value = value
}

IntegerNode.new = function(value) {
  return new this(value)
}
