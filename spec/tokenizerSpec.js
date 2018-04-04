describe('tokenize', () => {

  let testString = 'say("hello world")'

  let tokenizedString = [
    {type: 'function', value: 'say'},
    {type: 'open paren', value: '('},
    {type: 'string', value: 'hello world'},
    {type: 'close paren', value: ')'}
  ]

  it('formats input into an array of token objects', () => {
    expect(tokenize(testString)).toEqual(tokenizedString)
  })
})
