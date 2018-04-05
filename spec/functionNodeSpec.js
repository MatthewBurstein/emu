describe('FunctionNode', () => {
  let functionNode, outputString;

  beforeEach(() => {
    outputString;
    functionNode = FunctionNode.new('functionName', ['arg1', 'arg2'])
  })

  describe('.new()', () => {
    it('returns an instance a FunctionNode', () => {
      expect(functionNode.name).toEqual('functionName')
      expect(functionNode.args).toEqual(['arg1', 'arg2'])
    });
  });

  describe('#interpret()', () => {
    it('returns the correct string', function() {
      const callback = (arg) => `callbackString ${arg}`
      const callbackArgument = 'Argument'
      const expectedOutput = 'functionName(callbackString Argument)'

      expect(functionNode.interpretNode(callback, callbackArgument)).toEqual(expectedOutput)

    })
  })
})
