describe('interpret()', function() {
  let intNode1, intNode2, intNode3

  beforeEach(() => {
    intNode1 = { }
    intNode2 = { }
    intNode3 = { }
    spyOn(functionDictionary, 'add').and.returnValue('added')
    spyOn(functionDictionary, 'subtract').and.returnValue('subtracted')
  })

  describe('when passed a node with two child nodes', () => {
    beforeEach(() => {
      let funcNode = {
        data: 'add',
        type: 'function',
        children: [intNode1, intNode2]
      }
      tree = [funcNode]
    })

    it('calls the named function from the dictionary', () => {
      expect(interpret(tree)).toEqual(['added'])
    })

  })

  describe('when passed a node with a function node as a child', () => {
    beforeEach(() => {
      let innerFuncNode = {
        data: 'add',
        type: 'function',
        children: [intNode2, intNode3]
      }
      let outerFuncNode = {
        data: 'subtract',
        type: 'function',
        children: [intNode1, innerFuncNode]
      }
      tree = [outerFuncNode]
      interpret(tree)
    })

    it('calls the inner function', () => {
      expect(functionDictionary.add).toHaveBeenCalled()
    })

    it('calls the outer function', () => {
      expect(functionDictionary.subtract).toHaveBeenCalled()
    })
  })

  describe('when passed a loop node', () => {
    it('processes the second argument while the first argument evaluates to "yes"', () => {
      let funcNode1 = { data: 'say', type: 'function', children: ['hello world'] }
      let funcNode2 = { data: 'say', type: 'function', children: ['bye world'] }
      const loopNode = {
        type: 'loop',
        children: [funcNode1, funcNode2]
      }
      tree = [loopNode]
      spyOn(functionDictionary, 'say').and.returnValues('yes', 'no')

      expect(interpret(tree)).toEqual([['no']])
    })
  })

  describe('when passed a variable node', () => {
    it('processes a variable node', () => {
      let variableNode = {
        data: 'x',
        type: 'variable',
        children: []
      }

      tree = [variableNode]

      expect(interpret(tree)).toEqual([variableNode])
    })
  })
})
