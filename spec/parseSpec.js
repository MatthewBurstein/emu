describe('Parse', () => {
  let tree, tokens, stringNode1, stringNode2;

  beforeEach(() => {
    stringNode1 = { data: 'hello world', type: 'string', children: [] }
    stringNode2 = { data: 'bye world', type: 'string', children: [] }
  })

  it('understands a function with zero argument', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'close paren', value: ')' }
    ];
    tree = [ {data: 'say', type: 'function', children: []} ]

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a function with one argument', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'string', value: 'hello world' },
      { type: 'close paren', value: ')' }
    ];
    tree = [ {data: 'say', type: 'function', children: [stringNode1] } ]

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a function with two arguments', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'string', value: 'hello world' },
      { type: 'string', value: 'bye world' },
      { type: 'close paren', value: ')' }
    ];
    tree = [ { data: 'say', type: 'function', children: [stringNode1, stringNode2] } ];

    expect(parse(tokens)).toEqual(tree);
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

    const innerFuncNode = { data: 'sayAgain', type: 'function', children: [stringNode2] }
    const outerFuncNode = { data: 'say', type: 'function', children: [stringNode1, innerFuncNode] }
    tree = [outerFuncNode];

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

    const funcNode1 = { data: 'condition', type: 'function', children: [] }
    const funcNode2 = { data: 'operation', type: 'function', children: [] }
    const whileNode = { data: 'while', type: 'loop', children: [funcNode1, funcNode2] }
    tree = [whileNode]

    expect(parse(tokens)).toEqual(tree);

  })

  it('understands a variable', () => {
    tokens = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '(' },
      { type: 'variable', variableName: 'myVariable' },
      { type: 'close paren', value: ')' }
    ];

    const variableNode = { data: 'myVariable', type: 'variable', children: [] }
    const funcNode = { data: 'say', type: 'function', children: [variableNode] }
    tree = [funcNode]

    expect(parse(tokens)).toEqual(tree);
  })
});
