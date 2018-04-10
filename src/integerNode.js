;((exports) => {
  const IntegerNode = function (value) {
    this.type = 'number';
    this.value = value;
  };

  IntegerNode.new = function(value) {
    return new this(value);
  };

  exports.IntegerNode = IntegerNode;
})(this);
