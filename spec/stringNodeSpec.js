describe('StringNode', () => {
  let stringNode;

  beforeEach(() => {
    let outputString;
  })

  describe('.new()', () => {
    it('returns an instance a methodNode', () => {
      let stringNode = StringNode.new('type', 'value')
      expect(stringNode.type).toEqual('type')
      expect(stringNode.value).toEqual('value')
    });
  });
});
