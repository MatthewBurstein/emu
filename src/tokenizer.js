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

  function tokenize(workingString) {
    let output = [];
    while (workingString.length > 0) {
      let thisTokenLex;
      tokenDictionary.forEach(tokenLex => {
        if (matchRegEx(workingString, tokenLex) !== null) {
          thisTokenLex = tokenLex
        }
      })
      output.push(process(workingString, thisTokenLex));
      workingString = removeProcessedToken(workingString, thisTokenLex);
    }
    return output;
  }

  function process(workingString, tokenLex) {
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

  function addToken(string, token, outputArray) {
    outputArray.push(buildToken(token.type, matchRegEx(string, token)))
  }

  function matchRegEx(string, token) {
    return string.match(token.regEx) ? string.match(token.regEx)[0] : null
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
