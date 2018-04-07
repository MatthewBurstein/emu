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

  it('recognises assignVariable', ()=> {
    let testString = 'assignVariable<"variablebeingassigned" 1>'
    let tokenizedString = [
      { type: 'function', value: 'assignVariable' },
      { type: 'open paren', value: '<' },
      { type: 'string', value: "variablebeingassigned" },
      { type: 'integer', value: 1 },
      { type: 'close paren', value: '>' }
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  it('recognises user defined variable', () => {
    let variableTokenLex = {
      regEx: /^createdvariable/, type: 'variable', value: 1, variableType: 'integer'
    }

    tokenDictionary.push(variableTokenLex)

    let testString = 'add<2 createdvariable>'
    let tokenizedString = [
      { type: 'function', value: 'add' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 2 },
      { type: 'integer', value: 1 },
      { type: 'close paren', value: '>' }
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  it('recognises isGreaterThan', () => {
    let testString = 'isGreaterThan<1 2>'
    let tokenizedString = [
      { type: 'function', value: 'isGreaterThan' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 1 },
      { type: 'integer', value: 2 },
      { type: 'close paren', value: '>' }
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })

  it('recognises isLessThan', () => {
    let testString = 'isLessThan<1 2>'
    let tokenizedString = [
      { type: 'function', value: 'isLessThan' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 1 },
      { type: 'integer', value: 2 },
      { type: 'close paren', value: '>' }
    ]

    expect(tokenize(testString)).toEqual(tokenizedString)
  })
})
