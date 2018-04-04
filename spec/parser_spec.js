describe("Parser", function(){

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

  it('understands a function with one argument', function() {
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
      let args = ['hello world']
      let expectedOutput = {
        type: 'function',
        name: 'say',
        args: []
      }
      expect(createFunctionNode(type, name, args)).toEqual(expectedOutput)
    })
  })

})
