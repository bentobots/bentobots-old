'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipperJs = require('clipper-js');

var _clipperJs2 = _interopRequireDefault(_clipperJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var implementation = function implementation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      SUBJECT_PATHS = _ref.SUBJECT_PATHS,
      CLIP_PATHS = _ref.CLIP_PATHS;

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
  console.log('SUB', SUBJECT_PATHS);
  console.log('CLIP', CLIP_PATHS);
  var subject = new _clipperJs2.default(SUBJECT_PATHS, true);
  var clip = new _clipperJs2.default(CLIP_PATHS, true);
  var result = subject.intersect(clip);

  var finalResult = result.paths[0];
  // if (isArray) {
  //   finalResult = result.paths[0].map(r => ([r.X, r.Y]))
  // }
  return { PATHS: finalResult, CLOSED: result.closed };
};

var spec = {
  name: 'Creates an intersected path',
  description: 'gets path intersection',
  implementation: implementation,
  inputs: {
    SUBJECT_PATHS: {},
    CLIP_PATHS: {}
  },
  outputs: {
    PATHS: {},
    CLOSED: {}
  }
};

exports.default = spec;