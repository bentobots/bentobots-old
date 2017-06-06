import getItemAtIndex from './getItemAtIndex'

it('works without LIST', () => {
  const result = getItemAtIndex.implementation({INDEX: 1})
  expect(result).toEqual({ITEM: undefined})
})

it('works without INDEX', () => {
  const result = getItemAtIndex.implementation({LIST: [1, 2, 3]})
  expect(result).toEqual({ITEM: 1})
})

it('gets item at INDEX', () => {
  const result = getItemAtIndex.implementation({LIST: [1, 2, 3], INDEX: 1})
  expect(result).toEqual({ITEM: 2})
})

it('returns undefined if INDEX out of bounds', () => {
  const result = getItemAtIndex.implementation({LIST: [1, 2, 3], INDEX: 5})
  expect(result).toEqual({ITEM: undefined})
})
