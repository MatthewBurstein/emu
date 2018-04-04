describe("Parser", function(){

  it('understands a function with one argument', function() {
    var tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: ')'}
    ]
    var tree = [
      {type: 'function',
      name: 'say',
        args: [
          {
            type: 'string',
            value: 'hello world'
          },
        ]
    }
  ]
    expect(parser(tokens)).toEqual(tree)
  })

  it('understands a function with two argument', function() {
    var tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'comma', value: ','},
      {type: 'string', value: 'bye world'},
      {type: 'close paren', value: ')'}
    ]
    var tree = [
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
    expect(parser(tokens)).toEqual(tree)
  })

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
