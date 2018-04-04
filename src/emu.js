const tokens = [
  {match: /\bsay\b/, type: 'function', value: 'console.log'},
  {match: /\b[a-z]+\b/, type: 'string', value: 'some value'}
]

var testString = 'say("hello world")'


const tokenize = function(input) {
  let output = []
  tokens.forEach( token => {
    if(input.match(token.match)) {
      if(token.type == 'string') {
        token.value = input.match(token.match)[0]
      }
      output.push({
        type: token.type,
        value: token.value
      })
      var match = input.match(token.match)[0]
      input = input.slice(match.length).trim()
    }
  })
  return output
}

const interpret = function(arrayOfTokens) {
  let output = ""
  let lastTokenWasFunction = false
  arrayOfTokens.forEach( token => {
    if (token.type === 'function') {
      output += token.value + '('
      lastTokenWasFunction = true
    }
    if(token.type === 'string') {
      output = output + "'" + token.value + "'"
      if (lastTokenWasFunction) {
        output += ')'
      }
      lastTokenWasFunction = false
    }
  })
  return (Function(output))();
}
