describe('interpret()', function() {
  let testFunctionSpy, functionNode, tree;
  beforeEach(() => {
    testFunctionSpy = jasmine.createSpy('testFunction').and.returnValue('success')
    spyOn(Dictionary, 'new').and.returnValue({
      testFunction: testFunctionSpy
    })
    functionNode = { name: 'testFunction' }
    tree = [functionNode]
  })

  it('instantiates a dictionary object', () => {
    interpret(tree)
    expect(Dictionary.new).toHaveBeenCalledWith()
  })

  it('understands a tree with one expression', () => {
    interpret(tree)
    expect(testFunctionSpy).toHaveBeenCalledWith(functionNode)
  })
})
