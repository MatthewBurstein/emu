const emu = string => {
  return interpret(parse(tokenize(string)))
}
