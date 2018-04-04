((exports) => {
  const tokenDictionary = [
    { match: /\bsay\b/, type: 'function', value: 'say' },
    { match: /(\w+)/, type: 'string', value: '' },
    { match: /\(/, type: 'open paren', value: '(' },
    { match: /\)/, type: 'close paren', value: ')' }
  ]

  function tokenize(input) {
    let output = []
    tokenDictionary.forEach(token => {
      // when there is a match
      //   tokenize the match
      //   chop match from the input string
      //   then iterate again
      // while (input.length > 0) {
      //   if(input.match(token.match){
      //     var match = input.match(token.match)[0]
      //     output.push({
      //       type: token.type,
      //       value: match
      //     });
      //     input = input.slice(match.length).trim()
      //   }
      // }

      if (input.match(token.match)) {
        if (token.type === 'string') {
          console.log('string')
          console.log(input.match(token.match))
          output.push({
            type: token.type,
            value: input.match(token.match[0])[0]
          })
        } else {
          output.push({
            type: token.type,
            value: input.match(token.match)[0]
          })
        }
          var match = input.match(token.match)[0];
          input = input.slice(match.length).trim();
          console.log(input)
        }
      })
      return output
    }
  exports.tokenize = tokenize
})(this)
