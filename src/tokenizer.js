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
    switch (tokenLex.type) {
      case 'string':
        let stringValue = matchRegEx(workingString, tokenLex).slice(1, -1)
        return buildToken(tokenLex.type, stringValue)
        break;
      case 'function':
        return buildToken(tokenLex.type, matchRegEx(workingString, tokenLex))
        break;
      case 'open paren':
        return buildToken(tokenLex.type, matchRegEx(workingString, tokenLex))
        break;
      case 'close paren':
        return buildToken(tokenLex.type, matchRegEx(workingString, tokenLex))
        break;
      case 'integer':
        let number = parseInt(matchRegEx(workingString, tokenLex))
        return buildToken(tokenLex.type, number)
        break;
      default:
        throw new Error('Do not know that token');
      }
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
