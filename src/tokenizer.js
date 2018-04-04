((exports) => {
  const tokenDictionary = [
    { match: /\bsay\b/, type: 'function', value: 'say' },
    { match: /\(/, type: 'open paren', value: '(' },
    { match: /"([^"]*)"/, type: 'string', value: '' },
    { match: /\)/, type: 'close paren', value: ')' }
  ]

  function tokenize(input) {
    let output = []
    tokenDictionary.forEach(token => {
      if (input.match(token.match)) {
        if (token.type === 'string') {
          let slicedVal = input.match(token.match)[0].slice(1, -1)

          output.push({
            type: token.type,
            value: slicedVal
          })
        } else {
          output.push({
            type: token.type,
            value: input.match(token.match)[0]
          })
        }
          var match = input.match(token.match)[0];
        }
      })
      return output
    }
  exports.tokenize = tokenize
})(this)
