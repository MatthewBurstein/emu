;((exports) => {
  const StringNode = function (value) {
    this.type = 'string';
    this.value = value;
  };

  StringNode.new = function (value) {
    return new this(value);
  };

  exports.StringNode = StringNode;
})(this);
