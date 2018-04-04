((exports) => {
  const tokens = [
    { match: /\bsay\b/, type: 'function', value: 'console.log' },
    { match: /([\w])/, type: 'string', value: 'some value' },
    { match: /\(/, type: 'open paren', value: '(' }
  ]

  function tokenize(input) {
    let output = []
    tokens.forEach(token => {
      if (input.match(token.match)) {
        console.log(input.match(token.match)[0]);
          output.push({
            type: token.type,
            value: input.match(token.match)[0]
          })
          var match = input.match(token.match)[0]
          input = input.slice(match.length).trim()
          console.log(input.match(token.match)[0]);
        // }
        console.log(output);
      }
    })
  }
  exports.tokenize = tokenize
})(this)
