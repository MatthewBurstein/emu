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

  describe('it interprets a while loop', () => {
    xit('calls interpretLoop method', () => {
      let spyLoop = {
        type: 'loop',
        args: []
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
      //   name: 'while',
      //   args: []
      // }
      tree = [spyLoop]
      spyOn(spyLoop, '')
      interpret(tree)
      expect(spyLoop).toHaveBeenCalledWith(spyLoop.args)
    })

  })

})

describe('interpretLoop', () => {
  beforeEach(() => {
    emu('assignVariable<"x" 1>')
    // 'while<isLessThan<x 1> add<3 4>>'
    intNode1 = 1
    intNode2 = 2
    intNode3 = 3
    intNode4 = 4
    let innerFuncNode1 = {
      name: 'add',
      type: 'function',
      args: [intNode1, intNode2]
    }
    let innerFuncNode2 = {
      name: 'add',
      type: 'function',
      args: [intNode3, intNode4]
    }
    let outerFuncNode = {
        name: 'while',
        type: 'loop',
        args: [innerFuncNode1, innerFuncNode2]
      }
  })
    // tree = [outerFuncNode]
  it('epects true to eb true', () => {
    expect(true).toEqual(true)
  })
})
