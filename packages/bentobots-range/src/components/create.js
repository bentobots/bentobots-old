const implementation = ({START, END, STEP}) => {
  let sequence = []
  for (var i = START; i <= END; i += STEP) {
    sequence.push(i)
  }
  return { SEQ: sequence }
}

const spec = {
  name: 'Create Range',
  implementation,
  inputs: {
    START: 0,
    END: 10,
    STEP: 1
  },
  outputs: {
    SEQ: {}
  }
}

export default spec
