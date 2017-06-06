import create from './create'

it('creates a list with values', () => {
  const result = create.implementation({ITEM9: 'nine', ITEM0: 0, ITEM1: 'ONE', ITEM14: 14.4, ITEM102: 102})
  expect(result).toEqual({LIST: [0, 'ONE', 'nine', 14.4, 102]})
})

// it('creates a list with no values', () => {
//   const result = create.implementation()
//   expect(result).toEqual({LIST: []})
// })
