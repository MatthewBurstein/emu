describe("Parse", function(){

  it('understands a function with one argument', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: ')'}
    ]
    const tree = [
      {type: 'function',
      name: 'say',
        args: [
          {
            type: 'string',
            value: 'hello world'
          }
        ]
    }
  ]
    expect(parse(tokens)).toEqual(tree)
  })

  it('understands a function with two arguments', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'string', value: 'bye world'},
      {type: 'close paren', value: ')'}
    ]
    const tree = [
      {type: 'function',
      name: 'say',
        args: [
          {
            type: 'string',
            value: 'hello world'
          },
          {
            type: 'string',
            value: 'bye world'
          }
        ]
    }
  ]
    expect(parse(tokens)).toEqual(tree)
  })

  it('returns an abstract syntax tree when passed a nested function', () => {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello'},
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'world'},
      {type: 'close paren', value: ')'},
      {type: 'close paren', value: ')'}
    ]

    const tree = [
      { type: 'function',
        name: 'say',
        args: [
          {
            type: 'string',
            value: 'hello'
          },
          {
            type: 'function',
            name: 'alsoSay',
            args: [
              'world'
            ]
          }
        ]
      }
    ]

    expect(parse(tokens)).toEqual(tree)
  });

  describe('createStringNode', function() {
    it('creates an object from parameters', function() {
      let type = 'string'
      let value = 'value'
      let expectedOutput = {
        type: 'string',
        value: 'value'
      }
      expect(createStringNode(type, value)).toEqual(expectedOutput)
    })
  })

  describe('createFunctionNode', function() {
    it('creates an object from parameters', function() {
      let type = 'function';
      let name = 'say';
      let expectedOutput = {
        type: 'function',
        name: 'say',
        args: []
      }
      expect(createFunctionNode(type, name)).toEqual(expectedOutput)
    })
  })
})
