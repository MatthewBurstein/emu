describe('StringNode', () => {
  let stringNode, outputString;

  beforeEach(() => {
    outputString = 'outputString(';
    stringNode = StringNode.new('value')
  })

  describe('.new()', () => {
    it('returns an instance a methodNode', () => {
      stringNode = StringNode.new('value')
      expect(stringNode.value).toEqual('value')
    });
  });

});
