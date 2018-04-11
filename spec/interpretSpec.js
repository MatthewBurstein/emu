describe('interpret()', function() {

  let intNode1, intNode2, intNode3

  beforeEach(() => {
    intNode1 = { }
    intNode2 = { }
    intNode3 = { }
    intNode4 = { }

    let fakeDictionary = {
      add: function() { return 'added'}
    }

    spyOn(FunctionDictionary, 'new').and.returnValue(fakeDictionary)
  })

  describe('when passed one-node AST', () => {
    it('instantiates one dictionary', () => {
      let testFunctionSpy = jasmine.createSpy('testFunction').and.returnValue('success')
      let funcNode = { data: 'testFunction' }
      let tree = [funcNode]
      interpret(tree)
      expect(FunctionDictionary.new).toHaveBeenCalledTimes(1)
    })
  })

  describe('when passed three-node AST', () => {

    beforeEach(() => {
      let funcNode = {
        data: 'add',
        type: 'function',
        children: [intNode1, intNode2]
      }
      tree = [funcNode]
    })

    it('calls the right function data on the dictionary', () => {
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
        data: 'add',
        type: 'function',
        children: [intNode2, intNode3]
      }
      let outerFuncNode = {
        data: 'add',
        type: 'function',
        children: [intNode1, innerFuncNode]
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

  describe('it interprets a while loop', () => {
    xit('calls interpretLoop method', () => {
      let spyLoop = {
        type: 'loop',
        children: []
      }
      // const spyInterpretLoop = jasmine.createSpy('interpretLoop').and.returnValue('success')
      // let funcNode1 = {
      //   type: 'function'
      // }
      // let funcNode2= {
      //
      // }
      // let whileNode = {
      //   type: 'loop',
      //   data: 'while',
      //   args: []
      // }
      tree = [spyLoop]
      spyOn(spyLoop, '')
      interpret(tree)
      expect(spyLoop).toHaveBeenCalledWith(spyLoop.children)
    })

  })

})

describe('interpretLoop', () => {
  // emu('assignVariable<"x" 1>')
  // 'while<isLessThan<x 3> returnFirst<say<x> assignVariable<x add<x 1>>>>'
  let variableNode = VariableNode.new('x')
  let threeNode = IntegerNode.new(3)
  let isLessThanNode = FunctionNode.new('isLessThan', 'function', [variableNode, threeNode])

  let oneNode = IntegerNode.new(1)
  let addNode = FunctionNode.new('add', 'function', [variableNode, oneNode])
  let sayNode = FunctionNode.new('say', 'function', [variableNode])

  let assignVariableNode = FunctionNode.new('assignVariable', 'function', [variableNode, addNode])
  let returnFirstNode = FunctionNode.new('returnFirst', 'function', [sayNode, assignVariableNode])
  let whileNode = FunctionNode.new('while', 'loop', [isLessThanNode, returnFirstNode])

  xit('evaluates a simple while node', () => {
    expect(interpretLoop(whileNode)).toEqual(['1', '2'])
  })
})
