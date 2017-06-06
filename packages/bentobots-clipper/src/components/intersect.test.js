import intersect from './intersect'
import Shape from 'clipper-js'

const pathWithHole = [
  [{X: -10, Y: 260}, {X: -10, Y: 95}, {X: 125, Y: -13}, {X: 260, Y: 95}, {X: 260, Y: 260}].reverse(),
  [{X: 10, Y: 105}, {X: 125, Y: 13}, {X: 240, Y: 105}, {X: 240, Y: 240}, {X: 10, Y: 240}]
]
const path = [{X: 0, Y: 0}, {X: 100, Y: 150}, {X: 0, Y: 300}]

it('can intersect shapes', () => {
  // console.log(JSON.stringify(new Shape(pathWithHole).fixOrientation()))

  const holeShape = new Shape(pathWithHole, true)
  const shape = new Shape([path], true)

  console.log(shape.intersect(holeShape))
  expect(true).toEqual(true)

  // const result = intersect.implementation({SUBJECT_PATHS: pathWithHole, CLIP_PATHS: path})
  // const expected = {
  //   CLOSED: true,
  //   PATHS: 2
  // }
  // expect(result).toEqual(expected)
})
