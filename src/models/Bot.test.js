import Bot from './Bot'

describe('Bot', () => {

  it('requires an id', () => {
    expect(() => {
      new Bot()
    }).toThrowError('Missing parameter: id')
  })

  it('requires a component', () => {
    expect(() => {
      new Bot("UNIQUE_NAME")
    }).toThrowError('Missing parameter: component')
  })

})
