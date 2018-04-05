describe('interpret()', function() {

  it('understands a function with zero arguments', function() {
    let functionNode = FunctionNode.new('function', 'say', [])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('')
  })

  it('understands a function with one argument', function() {
    let stringNode = StringNode.new('string', 'hello world')
    let functionNode = FunctionNode.new('function', 'say', [stringNode])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world')
  })

  it('understands a function with two arguments', function() {
    let stringNode1 = new StringNode('string', 'hello world')
    let stringNode2 = new StringNode('string', 'goodbye cruel world')
    let functionNode = new FunctionNode('function', 'say', [stringNode1, stringNode2])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world goodbye cruel world')
  })

})
