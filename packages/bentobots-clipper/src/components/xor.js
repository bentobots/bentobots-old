import Shape from 'clipper-js'

const xor = ({ SUBJECT_PATHS, CLIP_PATHS } = {}) => {
  const subject = new Shape([SUBJECT_PATHS], true)
  const clip = new Shape([CLIP_PATHS], true)
  const result = subject.xor(clip)
  return { PATHS: result.paths[0], CLOSED: result.closed }
}

export default xor
