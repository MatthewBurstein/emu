describe('tokenize', () => {

  it('formats single argument function into an array of token objects', () => {
    let testString = 'say<"hello world">'
    let tokenizedString = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '<'},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: '>'}
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  it('recognises integer token', () => {
    let testString = 'say<1>'
    let tokenizedString = [
          {type: 'function', value: 'say'},
          {type: 'open paren', value: '<'},
          {type: 'integer', value: 1},
          {type: 'close paren', value: '>'}
        ]
    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  // it('formats nested function into an array of token objects', () => {
  //
  // })
})
