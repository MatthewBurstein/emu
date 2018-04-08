describe('interpret()', function() {

  let intNode1, intNode2, intNode3

  beforeEach(() => {
    intNode1 = { }
    intNode2 = { }
    intNode3 = { }

    let fakeDictionary = {
      add: function() { return 'added'}
    }

    spyOn(FunctionDictionary, 'new').and.returnValue(fakeDictionary)
  })

  describe('when passed one-node AST', () => {
    it('instantiates one dictionary', () => {
      let testFunctionSpy = jasmine.createSpy('testFunction').and.returnValue('success')
      let funcNode = { name: 'testFunction' }
      let tree = [funcNode]
      interpret(tree)
      expect(FunctionDictionary.new).toHaveBeenCalledTimes(1)
    })
  })

  describe('when passed three-node AST', () => {

    beforeEach(() => {
      let funcNode = {
        name: 'add',
        type: 'function',
        args: [intNode1, intNode2]
      }
      tree = [funcNode]
    })

    it('calls the right function name on the dictionary', () => {
      expect(interpret(tree)).toEqual(['added'])
    })

    it('calls FunctionDictionary.new twice', () => {
      interpret(tree)
      expect(FunctionDictionary.new).toHaveBeenCalledTimes(2)
    })
  })

  describe('when passed five-node nested AST', () => {
    beforeEach(() => {
      let innerFuncNode = {
        name: 'add',
        type: 'function',
        args: [intNode2, intNode3]
      }
      let outerFuncNode = {
        name: 'add',
        type: 'function',
        args: [intNode1, innerFuncNode]
      }
      tree = [outerFuncNode]
    })

    it('recursively resolves functions', () => {
      expect(interpret(tree)).toEqual(['added'])
    })

    it('calls FunctionDictionary.new thrice', () => {
      interpret(tree)
      expect(FunctionDictionary.new).toHaveBeenCalledTimes(3);
    })
  })
})
