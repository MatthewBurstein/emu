describe('variableDictionary', () => {
  let variable1, variable2;
  beforeEach(() => {
    variable1 = {
      variableName: 'variable1',
      value: 1
    }
    variable2 = {
      variableName: 'variable2',
      value: 'Some string'
    }
    variableDictionary.push(variable1, variable2)
  })

  describe('getVariableValue', () => {
    it('returns the value for a given variable node', () => {
      expect(getVariableValue(variable1)).toEqual(1)
      expect(getVariableValue(variable2)).toEqual('Some string')
    })
  })

  describe('getVariableName', () => {
    it('returns the name of a given variable node', () => {
      expect(getVariableName(variable1)).toEqual('variable1')
      expect(getVariableName(variable2)).toEqual('variable2')
    })
  })

  describe('.findVariableInDictionary()', () => {
    it('returns the variable from the dictionary specified by the variable passed variable name', () => {
      expect(findVariableInDictionary(variable1)).toEqual(variable1)
      expect(findVariableInDictionary(variable2)).toEqual(variable2)
    })
  })
})
