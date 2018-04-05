describe('interpret()', function() {

  it('understands say with zero arguments', function() {
    let functionNode = FunctionNode.new('function', 'say', [])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('')
  })

  it('understands say with one argument', function() {
    let stringNode = StringNode.new('string', 'hello world')
    let functionNode = FunctionNode.new('function', 'say', [stringNode])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world')
  })

  it('understands say with two arguments', function() {
    let stringNode1 = new StringNode('string', 'hello world')
    let stringNode2 = new StringNode('string', 'goodbye cruel world')
    let functionNode = new FunctionNode('function', 'say', [stringNode1, stringNode2])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world goodbye cruel world')
  })

  it('understands leviosa with two arguments', function() {
    let integerNode1 = new IntegerNode('integer', 1)
    let integerNode2 = new IntegerNode('integer', 2)
    let functionNode = new FunctionNode('function', 'leviosa', [integerNode1, integerNode2])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual(3)
  })

})
