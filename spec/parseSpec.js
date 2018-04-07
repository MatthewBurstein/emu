describe("Parse", function(){

  it('understands a function with zero argument', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'close paren', value: ')'}
    ]
    spyOn(FunctionNode, 'new').and.returnValue('functionNode')
    let tree = ['functionNode']

    expect(parse(tokens)).toEqual(tree)
    expect(FunctionNode.new).toHaveBeenCalledWith("say", [])
  })

  it('understands a function with one argument', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'close paren', value: ')'}
    ]
    spyOn(StringNode, 'new').and.returnValue('stringNode')
    spyOn(FunctionNode, 'new').and.returnValue({args: []})
    let tree = [{args: ['stringNode']}]

    expect(parse(tokens)).toEqual(tree)
    expect(FunctionNode.new).toHaveBeenCalledWith("say", [])
    expect(StringNode.new).toHaveBeenCalledWith("hello world")
  })

  it('understands a function with two arguments', function() {
    const tokens = [
      {type: 'function', value: 'say'},
      {type: 'open paren', value: '('},
      {type: 'string', value: 'hello world'},
      {type: 'string', value: 'bye world'},
      {type: 'close paren', value: ')'}
    ]

    spyOn(StringNode, "new").and.returnValues('hello world', 'bye world');
    spyOn(FunctionNode, 'new').and.returnValue({args: []})
    let tree = [{args: ['hello world', 'bye world']}]

    expect(parse(tokens)).toEqual(tree)
    expect(FunctionNode.new).toHaveBeenCalledWith("say", [])
    expect(StringNode.new).toHaveBeenCalledWith('hello world')
    expect(StringNode.new).toHaveBeenCalledWith('bye world')
  })

  // it('understands a nested function with one argument', () => {
  //   const tokens = [
  //     {type: 'function', value: 'say'},
  //     {type: 'open paren', value: '<'},
  //     {type: 'function', value: 'say'},
  //     {type: 'open paren', value: '<'},
  //     {type: 'string', value: 'hello world'},
  //     {type: 'close paren', value: '>'},
  //     {type: 'string', value: 'bye world'},
  //     {type: 'close paren', value: '>'}
  //   ]
  //
  //   spyOn(StringNode, "new").and.returnValues('hello world', 'bye world');
  //   spyOn(FunctionNode, 'new').and.returnValue({args: []})
  //   let tree = [{args:
  //     [{args: ['hello world']},
  //     'bye world']
  //   }]
  //
  //   expect(parse(tokens)).toEqual(tree)
  //   expect(FunctionNode.new).toHaveBeenCalledWith("say", [])
  //   expect(StringNode.new).toHaveBeenCalledWith('hello world')
  //   expect(StringNode.new).toHaveBeenCalledWith('bye world')
  // })
})
