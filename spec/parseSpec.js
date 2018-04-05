describe("Parse", function(){

  it('understands a function with zero argument', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'close paren', value: ')'}
    ]

    let functionNode = FunctionNode.new('say', [])
    let tree = [functionNode]

    expect(parse(tokens)).toEqual(tree)
  })

  it('understands a function with one argument', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: ')'}
    ]

    let stringNode = StringNode.new('hello world')
    let functionNode = FunctionNode.new('say', [stringNode])
    let tree = [functionNode]

    expect(parse(tokens)).toEqual(tree)
  })

  it('understands a function with two arguments', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'string', value: 'bye world'},
      {type: 'close paren', value: ')'}
    ]

    let stringNode1 = StringNode.new('hello world')
    let stringNode2 = StringNode.new('bye world')
    let functionNode = FunctionNode.new('say', [stringNode1, stringNode2])
    let tree = [functionNode]

    expect(parse(tokens)).toEqual(tree)
  })

})
