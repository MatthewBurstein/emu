describe('interpret()', function() {

  let intNode1, intNode2, intNode3

  beforeEach(() => {
    intNode1 = {
      type: 'integer',
      value: 1
    }
    intNode2 = {
      type: 'integer',
      value: 2
    }
    intNode3 = {
      type: 'integer',
      value: 3
    }
  })

  it('instantiates a dictionary object', () => {
    let testFunctionSpy = jasmine.createSpy('testFunction').and.returnValue('success')
    let funcNode = { name: 'testFunction' }
    spyOn(FunctionDictionary, 'new').and.returnValue({
      testFunction: testFunctionSpy
    })
    let tree = [funcNode]
    interpret(tree)
    expect(FunctionDictionary.new).toHaveBeenCalledWith()
  })

  it('understands a tree with one expression', () => {
    let funcNode = {
      name: 'add',
      type: 'function',
      args: [intNode1, intNode2]
    }

    tree = [funcNode]
    expect(interpret(tree)).toEqual([3])
  })

  describe('when passed nested AST', () => {
    it('recursively resolves functions', () => {
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

      expect(interpret(tree)).toEqual([6])
    })
  })
})
