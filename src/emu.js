;((exports) => {
  const emu = string => {
    return interpret(parse(tokenize(string)))
  }

  exports.emu = emu;
})(this);
