'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clipperJs = require('clipper-js');

var _clipperJs2 = _interopRequireDefault(_clipperJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xor = function xor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      SUBJECT_PATHS = _ref.SUBJECT_PATHS,
      CLIP_PATHS = _ref.CLIP_PATHS;

  var subject = new _clipperJs2.default([SUBJECT_PATHS], true);
  var clip = new _clipperJs2.default([CLIP_PATHS], true);
  var result = subject.xor(clip);
  return { PATHS: result.paths[0], CLOSED: result.closed };
};

exports.default = xor;