import Shape from 'clipper-js'

const implementation = ({ SUBJECT_PATHS, CLIP_PATHS } = {}) => {
  // let isArray = false
  // if (Array.isArray(SUBJECT_PATHS[0][0])) {
  //   console.log('SUBARR')
  //   SUBJECT_PATHS = SUBJECT_PATHS.map(p => ({X: p[0], Y: p[1]}))
  //   isArray = true
  // } else {
  //   console.log('SUBNOTARR')
  // }
  // if (Array.isArray(CLIP_PATHS[0][0])) {
  //   console.log('CLIARR')
  //   CLIP_PATHS = CLIP_PATHS.map(p => ({X: p[0], Y: p[1]}))
  //   isArray = true
  // } else {
  //   console.log('CLINOTARR')
  // }
  // console.log('SUB', SUBJECT_PATHS)
  // console.log('CLIP', CLIP_PATHS)
  const subject = new Shape(SUBJECT_PATHS, true)
  const clip = new Shape(CLIP_PATHS, true)
  const result = subject.intersect(clip)

  let finalResult = result.paths[0]
  // if (isArray) {
  //   finalResult = result.paths[0].map(r => ([r.X, r.Y]))
  // }
  return { PATHS: finalResult, CLOSED: result.closed }
}

const spec = {
  name: 'Creates an intersected path',
  description: 'gets path intersection',
  implementation,
  inputs: {
    SUBJECT_PATHS: {},
    CLIP_PATHS: {}
  },
  outputs: {
    PATHS: {},
    CLOSED: {}
  }
}

export default spec
