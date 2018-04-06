((exports) => {
  const tokenDictionary = [
    { regEx: /^say/, type: 'function', value: 'say' },
    { regEx: /^add/, type: 'function', value: 'add' },
    { regEx: /^subtract/, type: 'function', value: 'subtract' },
    { regEx: /^multiply/, type: 'function', value: 'multiply' },
    { regEx: /^modulo/, type: 'function', value: 'modulo' },
    { regEx: /^\</, type: 'open paren', value: '<' },
    { regEx: /^"([^"]*)"/, type: 'string'},
    { regEx: /^[0-9]+/, type: 'integer'},
    { regEx: /^\>/, type: 'close paren', value: '>' }
  ]

  function tokenize(workingString) {
    let tokenArray = [];
    while (workingString.length > 0) {
      let thisTokenLex = tokenDictionary.find(tokenLex => {
        return matchRegEx(workingString, tokenLex)
      })
      tokenArray.push(processToken(workingString, thisTokenLex));
      workingString = removeProcessedToken(workingString, thisTokenLex);
    }
    return tokenArray;
  }

  function processToken(workingString, tokenLex) {
    let tokenValue = matchRegEx(workingString, tokenLex);
    switch (tokenLex.type) {
      case 'string':
        tokenValue = tokenValue.slice(1, -1)
        break;
      case 'function':
        break;
      case 'open paren':
        break;
      case 'close paren':
        break;
      case 'integer':
        tokenValue = parseInt(tokenValue)
        break;
      default:
        throw new Error('Do not know that token');
      }
    return buildToken(tokenLex.type, tokenValue)
  }

  function matchRegEx(string, tokenLex) {
    return string.match(tokenLex.regEx) ? string.match(tokenLex.regEx)[0] : null
  }

  function buildToken(type, value) {
    return {type, value}
  }

  function removeProcessedToken(workingString, tokenLex) {
    let matchedString = matchRegEx(workingString, tokenLex)
    return workingString.slice(matchedString.length).trim()
  }

  exports.tokenize = tokenize
})(this)
