((exports) => {
  const tokenDictionary = [
    { regEx: /\bsay\b/, type: 'function', value: 'say' },
    { regEx: /\(/, type: 'open paren', value: '(' },
    { regEx: /\b"([^"]*)"\b/, type: 'string'},
    { regEx: /[0-9]+/, type: 'integer'},
    { regEx: /\b\)\b/, type: 'close paren', value: ')' }
  ]

  function tokenize(input) {
    let output = []
    let i = 0
    while (input.length > 0) {
      console.log(i)
      let thisTokenLex;
      tokenDictionary.forEach(tokenLex => {
        if (searchDictionary(input, tokenLex)) {
          thisTokenLex = tokenLex
        }
      })
      output.push(process(input, thisTokenLex))

      input = removeProcessedToken(input, thisTokenLex)
      i += 1
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
      // })
      return output
    }

  function process(workingString, tokenLex, output) {
    if (searchDictionary(workingString, tokenLex)) {
      // console.log(workingString);
      // console.log(tokenLex);
      switch (tokenLex.type) {
        console.log('muuuu')
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
        return buildToken(tokenlex.type, searchDictionary(workingString, tokenLex)[0])
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
    console.log('regex', matchedString)
    return workingString.slice(matchedString.length).trim()
  }

  exports.tokenize = tokenize
})(this)
