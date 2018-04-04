describe('tokenize', () => {



  it('formats single argument function into an array of token objects', () => {
    let testString = 'say("hello world")'
    let tokenizedString = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: ')'}
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  it('formats nested fucntion into an array of token objects', () => {

  })
})
