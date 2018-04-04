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
      arguments: [
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
      let type = 'function'
      let value = 'value'
      let expectedOutput = {
        type: 'function',
        value: 'value'
      }
      expect(createStringNode(type, value)).toEqual(expectedOutput)
    })
  })

})
