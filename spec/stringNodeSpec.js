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

  describe('#interpret()', () => {
    it('returns "this.value" (including quotes)', () => {
      let expectedOutput = '"value"'

      expect(stringNode.interpretNode()).toEqual(expectedOutput)
    })
  });
});
