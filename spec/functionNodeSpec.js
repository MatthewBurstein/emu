describe('FunctionNode', () => {
  let functionNode, outputString;

  beforeEach(() => {
    outputString;
    functionNode = FunctionNode.new('type', 'functionName', ['arg1', 'arg2'])
  })

  describe('.new()', () => {
    it('returns an instance a FunctionNode', () => {
      expect(functionNode.type).toEqual('type')
      expect(functionNode.name).toEqual('functionName')
      expect(functionNode.args).toEqual(['arg1', 'arg2'])
    });
  });

  describe('#interpret()', () => {
    it('returns the correct string', function() {
      const callback = (arg) => `callbackString ${arg}`
      const callbackArgument = 'Argument'
      const expectedOutput = 'functionName(callbackString Argument)'

      expect(functionNode.interpret(callback, callbackArgument)).toEqual(expectedOutput)

    })
  })
})
