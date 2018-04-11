describe('Parse', () => {
  let tree, tokens, stringNode1, stringNode2;

  beforeEach(() => {
    stringNode1 = { data: 'hello world', type: 'string', children: [] }
    stringNode2 = { data: 'bye world', type: 'string', children: [] }
  })

  it('understands a function with zero argument', () => {
    tokens = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '(' },
      { type: 'close paren', data: ')' }
    ];
    tree = [ {data: 'say', type: 'function', children: []} ]

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a function with one argument', () => {
    tokens = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '(' },
      { type: 'string', data: 'hello world' },
      { type: 'close paren', data: ')' }
    ];
    tree = [ {data: 'say', type: 'function', children: [stringNode1] } ]

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a function with two arguments', () => {
    tokens = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '(' },
      { type: 'string', data: 'hello world' },
      { type: 'string', data: 'bye world' },
      { type: 'close paren', data: ')' }
    ];
    tree = [ { data: 'say', type: 'function', children: [stringNode1, stringNode2] } ];

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a nested function with one argument', () => {
    tokens = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '<' },
      { type: 'string', data: 'hello world' },
      { type: 'function', data: 'sayAgain' },
      { type: 'open paren', data: '<' },
      { type: 'string', data: 'bye world' },
      { type: 'close paren', data: '>' },
      { type: 'close paren', data: '>' }
    ];

    const innerFuncNode = { data: 'sayAgain', type: 'function', children: [stringNode2] }
    const outerFuncNode = { data: 'say', type: 'function', children: [stringNode1, innerFuncNode] }
    tree = [outerFuncNode];

    expect(parse(tokens)).toEqual(tree);
  });

  it('understands a while node', () => {
    tokens = [
      { type: 'loop', data: 'while' },
      { type: 'open paren', data: '<' },
      { type: 'function', data: 'condition' },
      { type: 'open paren', data: '<' },
      { type: 'close paren', data: '>' },
      { type: 'function', data: 'operation' },
      { type: 'open paren', data: '<' },
      { type: 'close paren', data: '>' },
      { type: 'close paren', data: '>' }
    ];

    const funcNode1 = { data: 'condition', type: 'function', children: [] }
    const funcNode2 = { data: 'operation', type: 'function', children: [] }
    const whileNode = { data: 'while', type: 'loop', children: [funcNode1, funcNode2] }
    tree = [whileNode]

    expect(parse(tokens)).toEqual(tree);

  })

  it('understands a variable', () => {
    tokens = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '(' },
      { type: 'variable', variableName: 'myVariable' },
      { type: 'close paren', data: ')' }
    ];

    const variableNode = { data: 'myVariable', type: 'variable', children: [] }
    const funcNode = { data: 'say', type: 'function', children: [variableNode] }
    tree = [funcNode]

    expect(parse(tokens)).toEqual(tree);
  })
});
