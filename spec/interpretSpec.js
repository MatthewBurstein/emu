describe('interpret()', function() {

  it('understands say with zero arguments', function() {
    let functionNode = new FunctionNode('say', [])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('')
  })

  it('understands say with one argument', function() {
    let stringNode = new StringNode('string', 'hello world')
    let functionNode = new FunctionNode('say', [stringNode])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world')
  })

  it('understands say with two arguments', function() {
    let stringNode1 = new StringNode('string', 'hello world')
    let stringNode2 = new StringNode('string', 'goodbye cruel world')
    let functionNode = new FunctionNode('say', [stringNode1, stringNode2])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual('hello world goodbye cruel world')
  })

  it('understands add with two arguments', function() {
    let integerNode1 = new IntegerNode('integer', 1)
    let integerNode2 = new IntegerNode('integer', 2)
    let functionNode = new FunctionNode('add', [integerNode1, integerNode2])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual(3)
  })

  it('understands add with zero arguments', function() {
    let functionNode = new FunctionNode('add', [])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual(0)
  })

  it('understands add with one argument', function() {
    let integerNode1 = new IntegerNode('integer', 1)
    let functionNode = new FunctionNode('add', [integerNode1])
    let tree = [functionNode]

    expect(interpret(tree)).toEqual(1)
  })

})
