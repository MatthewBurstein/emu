describe('interpret()', function() {
  it('understands a function with one argument', function() {
    let stringNode = StringNode.new('string', 'hello world')
    let functionNode = FunctionNode.new('function', 'say', [stringNode])
    let tree = [functionNode]
    // let function
    // let tree = [
    //   {type: 'function',
    //    name: 'say',
    //    args: [
    //           {
    //             type: 'string',
    //             value: 'hello world'
    //           }
    //          ]
    //   }
    // ]

    let expectedOutput = 'say("hello world")'

    expect(interpret(tree)).toEqual(expectedOutput)
  })

  it('understands a function with two arguments', function() {
    let stringNode1 = new StringNode('string', 'hello world')
    let stringNode2 = new StringNode('string', 'goodbye cruel world')
    let functionNode = new FunctionNode('function', 'say', [stringNode1, stringNode2])
    let tree = [functionNode]
    // let tree = [
    //   {type: 'function',
    //    name: 'say',
    //    args: [
    //           {
    //             type: 'string',
    //             value: 'hello world'
    //           },
    //           {
    //             type: 'string',
    //             value: 'goodbye cruel world'
    //           }
    //          ]
    //   }
    // ]

    let expectedOutput = 'say("hello world", "goodbye cruel world")'
    expect(interpret(tree)).toEqual(expectedOutput)
  })

  it('understands nested functions', () => {
    let stringNode1 = new StringNode('string', 'hello world')
    let stringNode2 = new StringNode('string', 'goodbye cruel world')
    let functionNode2 = new FunctionNode('function', 'sayAgain', [stringNode2])
    let functionNode1 = new FunctionNode('function', 'say', [stringNode1, functionNode2])
    let tree = [functionNode1]
    // let tree = [
    //   {type: 'function',
    //    name: 'say',
    //    args: [
    //           {
    //             type: 'string',
    //             value: 'hello world'
    //           },
    //           { type: 'function',
    //             name: 'sayAgain',
    //             args: [
    //                   {
    //                     type: 'string',
    //                     value: 'goodbye cruel world'
    //                   }
    //             ]
    //           }
    //         ]
    //   }
    // ]

    let expectedOutput = 'say("hello world", sayAgain("goodbye cruel world"))'
    expect(interpret(tree)).toEqual(expectedOutput)
  })

})
