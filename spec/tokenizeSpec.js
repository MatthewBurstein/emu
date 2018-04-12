describe('tokenize', () => {
  let testString, tokenizedString;
  it('formats single argument function into an array of token objects', () => {
    testString = 'say<"hello world">';
    tokenizedString = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '<' },
      { type: 'string', data: 'hello world' },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises number token', () => {
    testString = 'say<1>';
    tokenizedString = [
      { type: 'function', data: 'say' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 1 },
      { type: 'close paren', data: '>' }
    ];
    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises assignVariable', () => {
    testString = 'assignVariable<"variablebeingassigned" 1>';
    tokenizedString = [
      { type: 'function', data: 'assignVariable' },
      { type: 'open paren', data: '<' },
      { type: 'string', data: 'variablebeingassigned' },
      { type: 'number', data: 1 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises user defined variable', () => {
    const variableTokenLex = {
      regEx: /^createdVariable/, type: 'variable', data: 'createdVariable'
    };

    tokenDictionary.push(variableTokenLex);

    testString = 'add<2 createdVariable>';
    tokenizedString = [
      { type: 'function', data: 'add' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 2 },
      { type: 'variable', data: 'createdVariable' },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises isGreaterThan', () => {
    testString = 'isGreaterThan<1 2>';
    tokenizedString = [
      { type: 'function', data: 'isGreaterThan' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 1 },
      { type: 'number', data: 2 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises isLessThan', () => {
    testString = 'isLessThan<1 2>';
    tokenizedString = [
      { type: 'function', data: 'isLessThan' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 1 },
      { type: 'number', data: 2 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises equality', () => {
    testString = 'isEqual<2 2>';
    tokenizedString = [
      { type: 'function', data: 'isEqual' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 2 },
      { type: 'number', data: 2 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises while', () => {
    testString = 'while<2 1>';
    tokenizedString = [
      { type: 'loop', data: 'while' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 2 },
      { type: 'number', data: 1 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises returnFirst', () => {
    testString = 'returnFirst<2 1>';
    tokenizedString = [
      { type: 'function', data: 'returnFirst' },
      { type: 'open paren', data: '<' },
      { type: 'number', data: 2 },
      { type: 'number', data: 1 },
      { type: 'close paren', data: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });
});
