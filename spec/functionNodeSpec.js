describe('FunctionNode', () => {
  let functionNode, outputString;

  beforeEach(() => {
    outputString;
    functionNode = FunctionNode.new('type', 'value', ['arg1', 'arg2'])
  })

  describe('.new()', () => {
    it('returns an instance a FunctionNode', () => {
      expect(functionNode.type).toEqual('type')
      expect(functionNode.value).toEqual('value')
      expect(functionNode.args).toEqual(['arg1', 'arg2'])
    });
  });

  describe('#interpret()', () => {
    it('returns the correct string', function() {
      const callback = (arg) => `callbackString ${arg}`
      const  callbackArgument = 'Argument'
      const expectedOutput = 'callbackString Argument'

      expect(functionNode.interpret(callback, callbackArgument)).toEqual(expectedOutput)

    })
  })
})
