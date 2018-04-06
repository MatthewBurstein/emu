const StringNode = function(value) {
  this.type = 'string';
  this.value = value;
}

StringNode.new = function(value) {
  return new this(value)
}

// StringNode.prototype.interpretNode = function() {
//   return `"${this.value}"`;
// }
