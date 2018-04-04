describe("Parser", function(){

  var tokens = [
    {type: 'function', value: 'say'},
    {type: 'open paren', value: '('},
    {type: 'string', value: 'hello world'},
    {type: 'close paren', value: ')'}
  ]

  var tree = {
    function: 'say',
      arguments: [
        {
          type: 'string',
          value: 'hello world'
        },
      ]
  }

  it('understands a function with one argument', function() {
    expect(parser(tokens)).toEqual(tree)
  })

})
