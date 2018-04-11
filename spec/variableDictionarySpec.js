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
    dictionaryVariable1 = {
      name: 'variable1',
      data: 1
    }
    dictionaryVariable2 = {
      name: 'variable2',
      data: 'Some string'
    }
    variableDictionary.push(dictionaryVariable1, dictionaryVariable2)
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
      expect(findVariableInDictionary(variableNode1)).toEqual(dictionaryVariable1)
      expect(findVariableInDictionary(variableNode2)).toEqual(dictionaryVariable2)
    })
  })
})
