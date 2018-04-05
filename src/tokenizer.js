((exports) => {
  const tokenDictionary = [
    { regEx: /\bsay\b/, type: 'function', value: 'say' },
    { regEx: /\(/, type: 'open paren', value: '(' },
    { regEx: /"([^"]*)"/, type: 'string'},
    { regEx: /[0-9]+/, type: 'integer'},
    { regEx: /\)/, type: 'close paren', value: ')' }
  ]

  function tokenize(input) {
    let output = []
    // tokenDictionary.forEach(token => {
      while (input.length > 0) {
        thisTokenLex = tokenDictionary.forEach(tokenLex () => {
          if (searchDictionary(input, tokenLex)) {
            return tokenLex
          }
        })
        process(string, tokenKey, output)
        remove(the match from the input)
        remove
      }
      // if (searchDictionary(input, token)) {
      //   switch (token.type) {
      //     case 'string':
      //       let stringValue = searchDictionary(input, token)[0].slice(1, -1)
      //       output.push(buildToken(token.type, stringValue))
      //       break;
      //     case 'function':
      //       addToken(input, token, output)
      //       break;
      //     case 'open paren':
      //       addToken(input, token, output)
      //       break;
      //     case 'close paren':
      //       addToken(input, token, output)
      //       break;
      //     case 'integer':
      //       let number = parseInt(searchDictionary(input, token))
      //       output.push(buildToken(token.type, number))
      //       break;
      //     default:
      //       throw new Error('Do not know that token');
      //     }
      //   }
      })
      return output
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
