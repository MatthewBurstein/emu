((exports) => {
  const tokens = [
    { match: /\bsay\b/, type: 'function', value: 'console.log' },
    { match: /\b[a-z0-9]+\b/i, type: 'string', value: 'some value' }
  ]

  function tokenize(input) {
    let output = []

    tokens.forEach(token => {
      if (input.match(token.match)) {
        output.push({
          type: token.type,
          value: token.match
        })
      }
    })
  }
})(this)
