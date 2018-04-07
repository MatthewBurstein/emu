describe('Dictionary', () => {
  let dictionary, testNodeWithNoArgs, testNodeWithOneArg, testNodeWithTwoArgs;

  beforeEach(() => {
    dictionary = new Dictionary()
    testNodeWithNoArgs = { args: [] }
  })

  describe('.new<>', () => {
    it('creates a new Dictionary object', () => {
    expect(Dictionary.new()).toEqual(jasmine.any(Dictionary))
    })
  })

  describe('.assignVariable<>', () => {
    it('generates a tokenLex using the passed argments and stores it in the tokenDictionary', () => {
      testNodeWithTwoArgs = { args: [
        { value: 'newVariable' },
        { value: 3,
          type: 'integer' }
      ]}
      let newTokenLex = {
        regEx: /^newVariable/,
        type: 'variable',
        value: 3,
        variableType: 'integer'
      }
      dictionary.assignVariable(testNodeWithTwoArgs)
      expect(tokenDictionary).toContain(newTokenLex)
    })
  })

  describe('.say<>', () => {
    it('when passed no arguments returns an empty string', () => {
      expect(dictionary.say(testNodeWithNoArgs)).toEqual('')
    })
    it("when passed arguments returns the concatenation of the arguments values", () => {
      testNodeWithTwoArgs = { args: [
        {value: "arg1"},
        {value: "arg2"}
      ]}
      expect(dictionary.say(testNodeWithTwoArgs)).toEqual('arg1 arg2')
    })
  })

  describe('mathematical functions', () => {
    beforeEach(() => {
      testNodeWithOneArg = { args: [{ value: 3 }] }
      testNodeWithTwoArgs = { args: [
        { value: 4 },
        { value: 3 }
      ]}
      testNodeWithTwoArgReversed = { args: [
        { value: 3 },
        { value: 4 }
      ]}
      testNodeWithTwoSameArgs = { args: [
        { value: 4 },
        { value: 4 }
      ]}
    })

    describe('.add<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(dictionary.add(testNodeWithNoArgs)).toEqual(0)
      })

      it('when passed arguments, returns the sum of the arguments', () => {
        expect(dictionary.add(testNodeWithTwoArgs)).toEqual(7)
      })
    })

    describe('.subtract<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(dictionary.subtract(testNodeWithNoArgs)).toEqual(0)
      })

      it('when passed arguments, subtracts the second argument from the first', () => {
        expect(dictionary.subtract(testNodeWithTwoArgs)).toEqual(1)
      })
    })

    describe('.multiply<>', () => {
      it('when passed no arguments, returns 0', () => {
        expect(dictionary.multiply(testNodeWithNoArgs)).toEqual(0)
      })

      it("when passed one argument, returns the agument's value", () => {
        expect(dictionary.multiply(testNodeWithOneArg)).toEqual(3)
      })

      it('when passed two arguments, returns their product', () => {
        expect(dictionary.multiply(testNodeWithTwoArgs)).toEqual(12)
      })
    })

    describe('.modulo<>', () => {
      it('returns 0 when passed no arguments', () => {
        expect(dictionary.modulo(testNodeWithNoArgs)).toEqual(0)
      })

      it('when passed one argument, returns the value of the argument', () => {
        expect(dictionary.modulo(testNodeWithOneArg)).toEqual(3)
      })

      it('when passed two arguments, returns the arg1 modulo arg2', () => {
        expect(dictionary.modulo(testNodeWithTwoArgs)).toEqual(1)
      })
    })

    describe('.isGreaterThan<>', () => {
      it('returns yes if first arg is greater than second arg', () => {
        expect(dictionary.isGreaterThan(testNodeWithTwoArgs)).toEqual('yes')
      })

      it('returns no if first arg is greater than second arg', () => {
        expect(dictionary.isGreaterThan(testNodeWithTwoArgReversed)).toEqual('no')
      })

      it('returns there is nothing to compare if no args passed', () => {
        expect(dictionary.isGreaterThan(testNodeWithNoArgs)).toEqual('there is nothing to compare')
      })

      it ('returns pass two arguments if no second arg passed', () => {
        expect(dictionary.isGreaterThan(testNodeWithOneArg)).toEqual('pass two arguments')
      })
    })

    describe('.isEqual<>', () => {
      it('returns yes if the arguments are equal', () => {
        expect(dictionary.isEqual(testNodeWithTwoSameArgs)).toEqual('yes')
      })
      it('returns no if the arguments are not equal', () => {
        expect(dictionary.isEqual(testNodeWithTwoArgs)).toEqual('no')
      })
      it('returns there is nothing to compare if no args passed', () => {
        expect(dictionary.isEqual(testNodeWithNoArgs)).toEqual('there is nothing to compare')
      })
      it ('returns pass two arguments if no second arg passed', () => {
        expect(dictionary.isEqual(testNodeWithOneArg)).toEqual('pass two arguments')
      })
    })
  })
})
