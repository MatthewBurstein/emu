describe('emu()', function () { 
  it('runs the whole program - add function', () => {
    const string = 'add<2 2>'

    expect(emu(string)).toEqual([4])
  })

  it('runs the whole program - say function', () => {
    const string = 'say<"hello">'

    expect(emu(string)).toEqual(["hello"])
  })
})
