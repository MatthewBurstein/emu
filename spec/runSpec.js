describe('#run()', () => {
  it('runs the passed function', () => {
    let fn = function() { return true }
    expect(run(fn)).toBe(true)
  })
})
