const implementation = ({ LIST = [], INDEX = 0} = {}) => {
  return { ITEM: LIST[INDEX] }
}

const spec = {
  name: 'Get item at index',
  description: 'finds an item in a list',
  implementation,
  inputs: {
    LIST: {},
    INDEX: {}
  },
  outputs: {
    ITEM: {}
  }
}

export default spec
