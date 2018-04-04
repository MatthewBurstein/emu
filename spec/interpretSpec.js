describe('interpret()', function() {
  it('works', function() {
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
})
