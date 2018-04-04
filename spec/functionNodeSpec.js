describe('FunctionNode', () => {
  let functionNode;

  beforeEach(() => {
    let outputString;
  })

  describe('.new()', () => {
    it('returns an instance a FunctionNode', () => {
      let functionNode = FunctionNode.new('type', 'value')
      expect(functionNode.type).toEqual('type')
      expect(functionNode.value).toEqual('value')
    });
  });
})
