describe('tokenize', () => {
  let testString, tokenizedString;
  it('formats single argument function into an array of token objects', () => {
    testString = 'say<"hello world">';
    tokenizedString = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '<' },
      { type: 'string', value: 'hello world' },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises integer token', () => {
    testString = 'say<1>';
    tokenizedString = [
      { type: 'function', value: 'say' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 1 },
      { type: 'close paren', value: '>' }
    ];
    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises assignVariable', () => {
    testString = 'assignVariable<"variablebeingassigned" 1>';
    tokenizedString = [
      { type: 'function', value: 'assignVariable' },
      { type: 'open paren', value: '<' },
      { type: 'string', value: 'variablebeingassigned' },
      { type: 'integer', value: 1 },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises user defined variable', () => {
    const variableTokenLex = {
      regEx: /^createdvariable/, type: 'variable', value: 1, variableType: 'integer'
    };

    tokenDictionary.push(variableTokenLex);

    testString = 'add<2 createdvariable>';
    tokenizedString = [
      { type: 'function', value: 'add' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 2 },
      { type: 'integer', value: 1 },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises isGreaterThan', () => {
    testString = 'isGreaterThan<1 2>';
    tokenizedString = [
      { type: 'function', value: 'isGreaterThan' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 1 },
      { type: 'integer', value: 2 },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises isLessThan', () => {
    testString = 'isLessThan<1 2>';
    tokenizedString = [
      { type: 'function', value: 'isLessThan' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 1 },
      { type: 'integer', value: 2 },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });

  it('recognises equality', () => {
    testString = 'isEqual<2 2>';
    tokenizedString = [
      { type: 'function', value: 'isEqual' },
      { type: 'open paren', value: '<' },
      { type: 'integer', value: 2 },
      { type: 'integer', value: 2 },
      { type: 'close paren', value: '>' }
    ];

    expect(tokenize(testString)).toEqual(tokenizedString);
  });
});
