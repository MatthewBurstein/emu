describe('interpret()', function() {
  let testFunctionSpy, functionNode, functionNode2, tree;
  beforeEach(() => {
    // testFunctionSpy = jasmine.createSpy('testFunction').and.returnValue('success')
    // spyOn(Dictionary, 'new').and.returnValue({
    //   testFunction: testFunctionSpy
    // })
    // functionNode = { name: 'testFunction' }
    // tree = [functionNode]
  })

  it('instantiates a dictionary object', () => {
    // interpret(tree)
    // expect(Dictionary.new).toHaveBeenCalledWith()
  })

  it('understands a tree with one expression', () => {
    intNode1 = IntegerNode.new(1)
    intNode2 = IntegerNode.new(2)
    funcNode = FunctionNode.new('add', [intNode1, intNode2])
    tree = [funcNode]

    expect(interpret(tree)).toEqual([3])
  })

  describe('when passed nested AST', () => {
    it('recursively resolves functions', () => {
      // 'add<1 add<2 3>>'
      intNode1 = IntegerNode.new(1)
      intNode2 = IntegerNode.new(2)
      intNode3 = IntegerNode.new(3)
      innerFuncNode = FunctionNode.new('add', [intNode2, intNode3])
      outerFuncNode = FunctionNode.new('add', [intNode1, innerFuncNode])

      tree = [outerFuncNode]

      expect(interpret(tree)).toEqual([6])
    })
  })
})
