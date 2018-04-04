describe('interpret()', function() {
  it('understands a function with one argument', function() {
    let tree = [
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

    let expectedOutput = 'say("hello world")'

    expect(interpret(tree)).toEqual(expectedOutput)
  })

  it('understands a function with two arguments', function() {
    let tree = [
      {type: 'function',
       name: 'say',
       args: [
              {
                type: 'string',
                value: 'hello world'
              },
              {
                type: 'string',
                value: 'goodbye cruel world'
              }
             ]
      }
    ]

    let expectedOutput = 'say("hello world", "goodbye cruel world")'
    expect(interpret(tree)).toEqual(expectedOutput)
  })

})
