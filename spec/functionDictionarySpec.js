describe('FunctionDictionary', () => {
  let functionDictionary,
    testNodeWithNoArgs,
    testNodeWithOneArg,
    testNodeWithTwoArgs,
    testNodeWithTwoSameArgs;

  beforeEach(() => {
    functionDictionary = new FunctionDictionary();
    testNodeWithNoArgs = { args: [] };
  });

  describe('.new<>', () => {
    it('creates a new FunctionDictionary object', () => {
      expect(FunctionDictionary.new()).toEqual(jasmine.any(FunctionDictionary));
    });
  });

  describe('.assignVariable<>', () => {
    let newtokenLex, reassignedTokenLex, previouslyCreatedTokenLex, tokenLexBeforeReplacement;

    describe('when variable has not been previously assigned', () => {
      it('generates a tokenLex using the passed arguments and stores it in the tokenDictionary', () => {
        testNodeWithTwoArgs = { args: [
          'newVariable',
          3
        ]}
        newTokenLex = {
          regEx: /^newVariable/,
          type: 'variable',
          value: 3,
          variableType: 'number',
          variableName: 'newVariable'
        }
        functionDictionary.assignVariable(testNodeWithTwoArgs)
        expect(tokenDictionary).toContain(newTokenLex)
      })

      it('generates a new variable in the variableDictionary', () => {
        testNodeWithTwoArgs = { args: [
          'newDictionaryVariable',
          3
        ]}
        let newDictionaryVariable = { name: 'newDictionaryVariable', value: 3 }
        functionDictionary.assignVariable(testNodeWithTwoArgs)
        expect(tokenDictionary).toContain(newTokenLex)
        expect(variableDictionary).toContain(newDictionaryVariable)
      })
    })

    describe('when variable has been assigned before', () => {
      it('replaces the tokenLex with the new value', () => {
        previouslyCreatedTokenLex = {
          regEx: /^forReplacement/,
          type: 'variable',
          value: 4,
          variableType: 'number',
          variableName: 'forReplacement'
        };
        tokenLexBeforeReplacement = Object.create(previouslyCreatedTokenLex)
        reassignedTokenLex = {
          regEx: /^forReplacement/,
          type: 'variable',
          value: 'updated variable value',
          variableType: 'string',
          variableName: 'forReplacement'
        };
        testNodeWithTwoArgs = { args: [
          'forReplacement',
          'updated variable value'
        ]}
        tokenDictionary.push(previouslyCreatedTokenLex);
        functionDictionary.assignVariable(testNodeWithTwoArgs);

        expect(tokenDictionary).toContain(reassignedTokenLex);
        expect(tokenDictionary).not.toContain(tokenLexBeforeReplacement);

      })

      it('replaces the dictionaryVariable with the new value', () => {
        testNodeWithTwoArgs = { args: [
          'forReplacementInDictionary',
          'newVariableValue'
        ]}
        oldDictionaryVariable = { name: 'forReplacementInDictionary', value: 'oldVariableValue' }
        newDictionaryVariable = { name: 'forReplacementInDictionary', value: 'newVariableValue'}
        dictionaryVariableBeforeReplacement = Object.create(oldDictionaryVariable)
        variableDictionary.push(oldDictionaryVariable)
        functionDictionary.assignVariable(testNodeWithTwoArgs);

        expect(variableDictionary).toContain(newDictionaryVariable);
        expect(variableDictionary).not.toContain(dictionaryVariableBeforeReplacement);
      })
    })
  })

  describe('.say<>', () => {
    it('when passed no arguments returns an empty string', () => {
      expect(functionDictionary.say(testNodeWithNoArgs)).toEqual('');
    });

    it('when passed arguments returns the concatenation of the arguments values', () => {
      testNodeWithTwoArgs = { args: ['hello', 'world'] };
      expect(functionDictionary.say(testNodeWithTwoArgs)).toEqual('hello world');
    });
  });

  describe('mathematical functions', () => {
    beforeEach(() => {
      testNodeWithOneArg = {
        args: [3]
      };
      testNodeWithTwoArgs = {
        args: [4, 3]
      };
      testNodeWithTwoSameArgs = {
        args: [4, 4]
      };
    });

    describe('.add<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(functionDictionary.add(testNodeWithNoArgs)).toEqual(0);
      });

      it('when passed arguments, returns the sum of the arguments', () => {
        expect(functionDictionary.add(testNodeWithTwoArgs)).toEqual(7);
      });
    });

    describe('.subtract<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(functionDictionary.subtract(testNodeWithNoArgs)).toEqual(0);
      });

      it('when passed arguments, subtracts the second argument from the first', () => {
        expect(functionDictionary.subtract(testNodeWithTwoArgs)).toEqual(1);
      });
    });

    describe('.multiply<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(functionDictionary.multiply(testNodeWithNoArgs)).toEqual(0);
      });

      it("when passed one argument, returns the agument's value", () => {
        expect(functionDictionary.multiply(testNodeWithOneArg)).toEqual(3);
      });

      it('when passed two arguments, returns their product', () => {
        expect(functionDictionary.multiply(testNodeWithTwoArgs)).toEqual(12);
      });
    });

    describe('.modulo<>', () => {
      it('returns 0 when passed no arguments', () => {
        expect(functionDictionary.modulo(testNodeWithNoArgs)).toEqual(0);
      });

      it('when passed one argument, returns the value of the argument', () => {
        expect(functionDictionary.modulo(testNodeWithOneArg)).toEqual(3);
      });

      it('when passed two arguments, returns the arg1 modulo arg2', () => {
        expect(functionDictionary.modulo(testNodeWithTwoArgs)).toEqual(1);
      });
    });

    describe('.isGreaterThan<>', () => {
      it('returns yes if first arg is greater than second arg', () => {
        expect(functionDictionary.isGreaterThan(testNodeWithTwoArgs)).toEqual('yes');
      });

      it('returns no if first arg is greater than second arg', () => {
        testNodeWithTwoArgs = { args: [3, 4] };
        expect(functionDictionary.isGreaterThan(testNodeWithTwoArgs)).toEqual('no');
      });

      it('returns there is nothing to compare if no args passed', () => {
        expect(functionDictionary.isGreaterThan(testNodeWithNoArgs)).toEqual('there is nothing to compare');
      });

      it('returns pass two arguments if no second arg passed', () => {
        expect(functionDictionary.isGreaterThan(testNodeWithOneArg)).toEqual('pass two arguments');
      });

      it('returns no when they are equal', () => {
        expect(functionDictionary.isGreaterThan(testNodeWithTwoSameArgs)).toEqual('no');
      });
    });

    describe('.isEqual<>', () => {
      it('returns yes if the arguments are equal', () => {
        expect(functionDictionary.isEqual(testNodeWithTwoSameArgs)).toEqual('yes');
      });

      it('returns no if the arguments are not equal', () => {
        expect(functionDictionary.isEqual(testNodeWithTwoArgs)).toEqual('no');
      });

      it('returns there is nothing to compare if no args passed', () => {
        expect(functionDictionary.isEqual(testNodeWithNoArgs)).toEqual('there is nothing to compare');
      });

      it('returns pass two arguments if no second arg passed', () => {
        expect(functionDictionary.isEqual(testNodeWithOneArg)).toEqual('pass two arguments');
      });
    });

    describe('.isLessThan<>', () => {
      it('returns yes if the first argument is less than the second', () => {
        testNodeWithTwoArgs = { args: [3, 4] };
        expect(functionDictionary.isLessThan(testNodeWithTwoArgs)).toEqual('yes');
      });

      it('returns no if the first argument is greater or equal to the second', () => {
        testNodeWithTwoArgs = { args: [4, 3] };
        expect(functionDictionary.isLessThan(testNodeWithTwoArgs)).toEqual('no');
      });

      it('returns there is nothing to compare if no args passed', () => {
        expect(functionDictionary.isLessThan(testNodeWithNoArgs)).toEqual('there is nothing to compare');
      });

      it('returns pass two arguments if no second arg passed', () => {
        expect(functionDictionary.isLessThan(testNodeWithOneArg)).toEqual('pass two arguments');
      });
    });

    describe('.if<>', () => {
      it('evaluates second method if first method evaluates to yes', () => {
        const testNode = {
          name: 'if',
          args: ['yes', 3, 30]
        };
        expect(functionDictionary.if(testNode)).toEqual(3);
      });
    });
  });
});
