describe('FunctionNode', () => {
  let functionNode;

  beforeEach(() => {
    functionNode = FunctionNode.new('functionName', 'function', ['arg1', 'arg2']);
  });

  describe('.new()', () => {
    it('returns an instance a FunctionNode', () => {
      expect(functionNode.name).toEqual('functionName');
      expect(functionNode.args).toEqual(['arg1', 'arg2']);
    });
  });
});
