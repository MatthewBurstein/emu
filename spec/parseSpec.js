describe('Parse', () => {
  let tree, tokens;

  it('understands a function with zero argument', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'close paren', value: ')' }
    ];
    spyOn(FunctionNode, 'new').and.returnValue('functionNode');
    tree = ['functionNode'];

    expect(parse(tokens)).toEqual(tree);
    expect(FunctionNode.new).toHaveBeenCalledWith('say');
  });

  it('understands a function with one argument', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'string', value: 'hello world' },
      { type: 'close paren', value: ')' }
    ];
    spyOn(StringNode, 'new').and.returnValue('stringNode');
    spyOn(FunctionNode, 'new').and.returnValue({ args: [] });
    tree = [{ args: ['stringNode'] }];

    expect(parse(tokens)).toEqual(tree);
    expect(FunctionNode.new).toHaveBeenCalledWith('say');
    expect(StringNode.new).toHaveBeenCalledWith('hello world', undefined);
  });

  it('understands a function with two arguments', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'string', value: 'hello world' },
      { type: 'string', value: 'bye world' },
      { type: 'close paren', value: ')' }
    ];

    spyOn(StringNode, 'new').and.returnValues('hello world', 'bye world');
    spyOn(FunctionNode, 'new').and.returnValue({ args: [] });
    tree = [{ args: ['hello world', 'bye world'] }];

    expect(parse(tokens)).toEqual(tree);
    expect(FunctionNode.new).toHaveBeenCalledWith('say');
    expect(StringNode.new).toHaveBeenCalledWith('hello world', undefined);
    expect(StringNode.new).toHaveBeenCalledWith('bye world', undefined);
  });

  it('understands a nested function with one argument', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '<' },
      { type: 'string', value: 'hello world' },
      { type: 'function', value: 'sayAgain' },
      { type: 'open paren', value: '<' },
      { type: 'string', value: 'bye world' },
      { type: 'close paren', value: '>' },
      { type: 'close paren', value: '>' }
    ];

    const stringNode1 = StringNode.new('hello world');
    const stringNode2 = StringNode.new('bye world');
    const innerFunction = FunctionNode.new('sayAgain', [stringNode2]);
    const outerFunction = FunctionNode.new('say', [stringNode1, innerFunction]);
    tree = [outerFunction];

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a while node', () => {
    tokens = [
      { type: 'loop', value: 'while' },
      { type: 'open paren', value: '<' },
      { type: 'function', value: 'condition' },
      { type: 'open paren', value: '<' },
      { type: 'close paren', value: '>' },
      { type: 'function', value: 'operation' },
      { type: 'open paren', value: '<' },
      { type: 'close paren', value: '>' },
      { type: 'close paren', value: '>' }
    ];
    const funcNode1 = FunctionNode.new('condition')
    const funcNode2 = FunctionNode.new('operation')
    const funcNode3 = FunctionNode.new('while', [funcNode1, funcNode2])

    tree = [funcNode3]

    expect(parse(tokens)).toEqual(tree);

  })
});
