describe('variableDictionary', () => {
  let variableNode1, variableNode2, variable1, variable2;

  beforeEach(() => {
    variableNode1 = {
      type: 'variable',
      data: 'variable1'
    }
    variableNode2 = {
      type: 'variable',
      data: 'variable2'
    }
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
      expect(getVariableValue(variableNode1)).toEqual(1)
      expect(getVariableValue(variableNode2)).toEqual('Some string')
    })
  })

  describe('getVariableName', () => {
    it('returns the name of a given variable node', () => {
      expect(getVariableName(variableNode1)).toEqual('variable1')
      expect(getVariableName(variableNode2)).toEqual('variable2')
    })
  })

  describe('.findVariableInDictionary()', () => {
    it('returns the variable from the dictionary specified by the passed variable node', () => {
      expect(findVariableInDictionary(variableNode1)).toEqual(variable1)
      expect(findVariableInDictionary(variableNode2)).toEqual(variable2)
    })
  })
})
