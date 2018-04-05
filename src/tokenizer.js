((exports) => {
  const tokenDictionary = [
    { regEx: /\bsay\b/, type: 'function', value: 'say' },
    { regEx: /\(/, type: 'open paren', value: '(' },
    { regEx: /"([^"]*)"/, type: 'string', value: '' },
    { regEx: /\)/, type: 'close paren', value: ')' }
  ]

  function tokenize(input) {
    let output = []
    tokenDictionary.forEach(token => {
      if (searchDictionary(input, token)) {
        switch (token.type) {
          case 'string':
            let stringValue = searchDictionary(input, token).slice(1, -1)
            output.push(buildToken(token.type, stringValue))
            break;
          case 'function':
            addToken(input, token, output)
            break;
          case 'open paren':
            addToken(input, token, output)
            break;
          case 'close paren':
            addToken(input, token, output)
            break;
          default:
            throw new Error('Do not know that token');
          }
        }
      })
      return output
    }

  function addToken(string, token, outputArray) {
    outputArray.push(buildToken(token.type, searchDictionary(string, token)))
  }

  function searchDictionary(string, token) {
    return string.match(token.regEx)[0]
  }

  function buildToken(type, value) {
    return {type, value}
  }

  exports.tokenize = tokenize
})(this)
