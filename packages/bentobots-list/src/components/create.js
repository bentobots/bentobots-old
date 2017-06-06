const implementation = (INPUTS = {}) => {
  const list = Object.keys(INPUTS)
    // extract numbers from "ITEM${NUMBER}"
    .map(k => k.match(/\d+$/)[0])
    // sort 'naturally'
    .sort((a, b) => a - b)
    // return input values in correct order
    .map(sorted => INPUTS[`ITEM${sorted}`])

  return { LIST: list }
}

const spec = {
  name: 'Create List',
  description: 'makes a list from what\'s passed into it',
  implementation,
  inputs: {
    ITEM0: {},
    ITEM1: {},
    ITEM2: {}
  },
  outputs: {
    LIST: {}
  }
}

export default spec
