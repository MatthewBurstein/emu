((exports) => {
  const tokenDictionary = [
    { regEx: /^say/, type: 'function', value: 'say' },
    { regEx: /^add/, type: 'function', value: 'add' },
    { regEx: /^subtract/, type: 'function', value: 'subtract' },
    { regEx: /^\</, type: 'open paren', value: '<' },
    { regEx: /^"([^"]*)"/, type: 'string'},
    { regEx: /^[0-9]+/, type: 'integer'},
    { regEx: /^\>/, type: 'close paren', value: '>' }
  ]

  function tokenize(input) {
    let output = [];
    while (input.length > 0) {
      let thisTokenLex;
      tokenDictionary.forEach(tokenLex => {
        if (searchDictionary(input, tokenLex)) {
          thisTokenLex = tokenLex
        }
      })
      output.push(process(input, thisTokenLex));
      input = removeProcessedToken(input, thisTokenLex);
    }
    return output;
  }

  function process(workingString, tokenLex, output) {
    if (searchDictionary(workingString, tokenLex)) {
      switch (tokenLex.type) {
        case 'string':
          let stringValue = searchDictionary(workingString, tokenLex)[0].slice(1, -1)
          return buildToken(tokenLex.type, stringValue)
          break;
        case 'function':
          return buildToken(tokenLex.type, searchDictionary(workingString, tokenLex)[0])
          break;
        case 'open paren':
          return buildToken(tokenLex.type, searchDictionary(workingString, tokenLex)[0])
          break;
        case 'close paren':
          return buildToken(tokenLex.type, searchDictionary(workingString, tokenLex)[0])
          break;
        case 'integer':
          let number = parseInt(searchDictionary(workingString, tokenLex))
          return buildToken(tokenLex.type, number)
          break;
        default:
          throw new Error('Do not know that token');
        }
      }
  }

  function addToken(string, token, outputArray) {
    outputArray.push(buildToken(token.type, searchDictionary(string, token)[0]))
  }

  function searchDictionary(string, token) {
    return string.match(token.regEx)
  }

  function buildToken(type, value) {
    return {type, value}
  }

  function removeProcessedToken(workingString, tokenLex) {
    let matchedString = searchDictionary(workingString, tokenLex)[0]
    return workingString.slice(matchedString.length).trim()
  }

  exports.tokenize = tokenize
})(this)
