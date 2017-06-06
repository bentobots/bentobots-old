import create from './create'

it('creates a sequence with values', () => {
  const result = create.implementation({START: 0, END: 20, STEP: 4})
  expect(result).toEqual({SEQ: [0,4,8,12,16,20]})
})
